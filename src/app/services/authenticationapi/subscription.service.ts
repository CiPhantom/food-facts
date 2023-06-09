import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  baseUrl: string = "http://localhost:8090";

  constructor(private httpClient : HttpClient) { }

  doSubscription(subscription) {
    return this.httpClient.post(this.baseUrl + "/user/subscribe", subscription);
  }
}
