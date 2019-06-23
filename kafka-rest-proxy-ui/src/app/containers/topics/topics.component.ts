import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TopicInfo, TopicService, Replica, NewTopicRequest } from 'src/app/services/topics/topic.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

class TopicShortInfo {
  topic: string
  leader: Replica
  partition: number
  replicas: number
  inSyncReplicas: number
  offlineReplicas: number

  constructor(topicInfo: TopicInfo) {
    this.topic = topicInfo.topic;
    this.leader = topicInfo.leader;
    this.partition = topicInfo.partition;
    this.replicas = topicInfo.replicas.length;
    this.inSyncReplicas = topicInfo.inSyncReplicas.length;
    this.offlineReplicas = topicInfo.offlineReplicas.length;
  }
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  data: Observable<TopicShortInfo[]>;
  columns: string[] = [];
  rows: any[] = [];
  newTopic: NewTopicRequest = {topicName: "", partitions: 1, replicas: 1};

  constructor(private router: Router, private topicService: TopicService) {
    this.refresh();
  }

  ngOnInit() {
  }

  refresh() {
    this.data = this.topicService.getTopicList().pipe(      
      map(topics => {
        return topics.map(topic => new TopicShortInfo(topic));
      })
    );
    this.data.subscribe(topicInfo => {
      if (topicInfo != undefined && topicInfo.length > 0) {
        this.columns = Object.keys(topicInfo[0]);
      }
      this.rows = topicInfo;
    });
  }

  onTopicClick(topic: TopicShortInfo) {
    this.router.navigate([`/topics/${topic.topic}`]);
  }

  createTopic() {
    if (this.newTopic.topicName == undefined || this.newTopic.topicName === "") {
      alert("Topic name must be set");
      return;
    }
    this.topicService.createTopic(this.newTopic).subscribe(response => this.refresh());
  }

  setNewTopicValue(key: string, value: any) {
    this.newTopic[key] = value;
  }

}
