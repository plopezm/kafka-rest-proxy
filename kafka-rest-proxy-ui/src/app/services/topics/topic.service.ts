import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface TopicInfo {
  topic: string
  leader: Replica
  partition: number
  replicas: Replica[]
  inSyncReplicas: Replica[]
  offlineReplicas: Replica[]
}

export interface Replica {
  id: number
  idString: string
  host: string
  port: number
  empty: boolean
  hash: any
  rack: any
}

export interface TopicMessage {
    topic: string
    partition: number
    offset: number
    timestamp: number
    timestampType: string
    serializedKeySize: number
    serializedValueSize: number
}

export interface NewTopicRequest {
    partitions: number,
    replicas: number,
    topicName:string
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topics: any;

  constructor(private httpClient: HttpClient) { }

  getBaseUrl() {  
    return 'http://localhost:9000/';  
  }  

  getTopicList(): Observable<TopicInfo[]> {
    return this.httpClient.get("/kafka/topics")
      .pipe(
        map(response => {
            return Object.keys(response)
            .map(key => response[key])
            .reduce((flat, toFlatten) => {
              return flat.concat(toFlatten);
            }, [])
        })
      )     
  }

  getTopicMessages(topic: string, offset: number = 0, limit?: number): Observable<TopicMessage[]> {
    return this.httpClient.get<TopicMessage[]>(`/kafka/topics/${topic}?offset=${offset}&max=${limit}`)
  }

  createTopic(newTopicRequest: NewTopicRequest) {
    return this.httpClient.post<any>("/admin/topics", newTopicRequest);
  }

}
