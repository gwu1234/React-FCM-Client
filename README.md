it is a self-education project: 

a React web app and a Firebase Cloud Message (FCM) Client.

steps:
1) set up a serive-workers for FCM: firebase-messaging-sw.js

2) initialize and get integrated with Firebase FCM service push-notification.js


var firebaseConfig = {

    apiKey: "",

    authDomain: "",

    databaseURL: "https://push-notification.firebaseio.com",

    projectId: "push-notification",

    storageBucket: "push-notification.appspot.com",

    messagingSenderId: "",

    appId: "",

    measurementId: ""

};


export const initializeFirebase = () => firebase.initializeApp(firebaseConfig) ;

3)  FCM handler and display push notification


    this.messaging = firebase.messaging();


    this.messaging.onMessage((payload) => 
    {
           console.log('Message received. ', payload);
           
           this.setState ({message: payload});
           
    });
   }

4) test with curl command 

// to one web client

curl -X POST --header "Authorization:

 key=AAAAb3zEEKg:APA91bEImpuXfdMdQ6kBjRCy5vVif06TK5paGJ2qWYU_NEkgZLvCgx5hC5pkVk2EJWPEbETa3ZCh1GP" \
    
    --Header "Content-Type: application/json" \
    
    https://fcm.googleapis.com/fcm/send \
    
    -d "
    
    {\"to\":\"f1tWNmwHG6u5HgsNQC7NCZFIvioLDaH5KCx51nwVXGb0VZ8TsJQx8laQRmUD3BLjrEqlN8mZLFbhKGKpJkFWJUuULAPYJiMQDqn5zPIehERpKd-J4N9pJfQGvaK0\",\"notification\":{\"body\":\"Guoping is OK\"},\"priority\":10}"

// to a group of client

curl -H "Content-type: application/json" -H "Authorization:key=<Your Api key>" \

 -X POST -d '{"to": "<aUniqueKey>","data": \
 {"hello": "This is a Firebase Cloud Messaging Device Group Message!"}}' https://fcm.googleapis.com/fcm/send
  