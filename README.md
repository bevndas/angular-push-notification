# AngularPushNotifications

This is a simple example of push notification implementation in angular with express server.
Important: AngularCli version should be 6.x or  greater and Node version should be 8.x or greater.


## Dependencies

Install from npm:
 -http-server
 -cors
 -express
 -body-parser
 -web-push
 -angular material

## Development server

Go to the 'server' directory and run node server.js to run the server. 

## Build

The service worker only works in production mode. So perform 'ng build --prod'. Install 'http-server' from npm to host  the production build of the app. Perform 'http-server dist/angular-push-notifications' for it.


