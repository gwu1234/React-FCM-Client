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
  