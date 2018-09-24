import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {PushNotificationService} from './push-notification.service';
const VAPID_PUBLIC = 'BOg35W3-4zg--Ni5Y9wobgRf7MM7hnCU5XQFuX11CQO-L4hYH5E8zwh-EYfSLJZO4r9Oi99rvTOXwihS6_UQHtc'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    buttonToggle = false;
  constructor(private _swPush: SwPush,
              private  _pushService: PushNotificationService) {
  }
  title = 'angular-push-notifications';
  subscribe() {
      if (this._swPush.isEnabled) {
          this.buttonToggle = true;
          this._swPush.requestSubscription({
              serverPublicKey: VAPID_PUBLIC
          }).then(subscription => {
              this._pushService.sendSubscriptionToTheServer(subscription).
              subscribe(res => console.log('success'),
                  err => console.log('err'));
          }).catch(console.error);
      }
  }
  sendNot() {
      this._pushService.sendNotification();
  }
}
