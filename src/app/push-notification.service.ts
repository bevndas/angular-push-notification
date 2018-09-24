import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const SERVER_URL = 'http://localhost:3000/subscription';
const SERVER_URL1 = 'http://localhost:3000/sendNotification';
const notificationPayload = {
    notification:{
        title: 'New Notification',
        body: 'This is the body  of the notification',
        icon: 'assets/icons/icon-512x512.png'
    }
};
@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private _http: HttpClient) { }
  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this._http.post(SERVER_URL, subscription);
  }
  public sendNotification() {
    return this._http.post(SERVER_URL1, notificationPayload).subscribe(res =>  console.log('success'));
  }
}
