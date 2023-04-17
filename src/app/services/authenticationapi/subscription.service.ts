import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  baseUrl$: string = "http://localhost:8090";

  constructor(private http : HttpClient) { }

  doSubscription(subscription : Subscription) {
    return this.http.post(this.baseUrl$ + "/user/subscribe", subscription);
  }
}
