import { Component } from '@angular/core';
import { TopicService, TopicInfo } from './services/topics/topic.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class TopicShortInfo {
  topic: string
  //leader: Replica
  partition: number
  replicas: number
  inSyncReplicas: number
  offlineReplicas: number

  constructor(topicInfo: TopicInfo) {
    this.topic = topicInfo.topic;
    //this.leader = topicInfo.leader;
    this.partition = topicInfo.partition;
    this.replicas = topicInfo.replicas.length;
    this.inSyncReplicas = topicInfo.inSyncReplicas.length;
    this.offlineReplicas = topicInfo.offlineReplicas.length;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kafka-rest-proxy-ui';

  data: Observable<TopicShortInfo[]>;
  columns: string[] = [];

  constructor(private topicService: TopicService) {
    this.data = this.topicService.getTopicList().pipe(      
      map(topics => {
        return topics.map(topic => new TopicShortInfo(topic));
      })
    );
    this.data.subscribe(topicInfo => {
      if (topicInfo != undefined && topicInfo.length > 0) {
        this.columns = Object.keys(topicInfo[0]);
      }
    });
  }


}
