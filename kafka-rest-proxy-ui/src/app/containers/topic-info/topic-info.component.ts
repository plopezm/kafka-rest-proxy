import { Component, OnInit } from '@angular/core';
import { TopicService, TopicMessage } from 'src/app/services/topics/topic.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topic-info',
  templateUrl: './topic-info.component.html',
  styleUrls: ['./topic-info.component.css']
})
export class TopicInfoComponent implements OnInit {
  
  topicId: string;
  offset: number = 0;
  maxRecords: number = 100;

  data: Observable<TopicMessage[]>;
  columns: string[] = [];
  rows: TopicMessage[] = [];

  constructor(private router: ActivatedRoute, private topicService: TopicService) {
    this.router.paramMap.subscribe(params => {    
      this.topicId = params.get("id");
      this.refresh();
    })
  }

  ngOnInit() {
  }

  refresh() {
    this.data = this.topicService.getTopicMessages(this.topicId, this.offset, this.maxRecords).pipe(
      map(response => {
          return response.map(msg => {
            delete msg["headers"];
            delete msg["checksum"];
            return msg;
          }).sort(function (a, b) {
            if (a.offset > b.offset) {
              return -1;
            }
            if (a.offset < b.offset) {
              return 1;
            }
            // a must be equal to b
            return 0;
          })
      })
    );
    this.data.subscribe(topicInfo => {
      if (topicInfo != undefined && topicInfo.length > 0) {
        this.columns = Object.keys(topicInfo[0]);
        this.rows = topicInfo;
      }
    });
  }

  updateOffset(offset: number) {
    this.offset = offset;
  }

  updateMax(max: number) {
    this.maxRecords = max;
  }
}
