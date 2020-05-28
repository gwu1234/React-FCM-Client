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


 5) you may need to implement Firebase function to send notification to selected app or web app:
 
 exports.sendNotification = functions.https.onRequest(async (req, res) => {

      let tokens = [];
      tokens.push("f1tWNnsIU-aHH_-TzoB-gl:APA91bExf3Myto7-p_WRhmwHG6u5HgsNQC7NCZFIvioLDaH5KCx51nwVXGb0VZ8TsJQx8laQRmUD3BLjrEqlNiMQDqn5zPIehERpKd-J4N9pJfQGvaK0");

      const payload = {

        notification: {

          title: 'Guoping Push Notification',

          body: 'Guoping Message'

        }
      };

      const response = await admin.messaging().sendToDevice(tokens, payload);

      console.log(response);

      return null;

    });
  
  here tokens is arrays of elected app's tokens (one or multiple);

  tokens can be stored at forebase database, or are sent remotely from a web app.

  you need to install firebase function by the following command 

  firebase deploy --only functions

  and you can triger this function from a browser:
  
  if no param included

  https://us-central1-FIREBASE_PROJECT_NAME.cloudfunctions.net/sendNotification

  if a param included

  https://us-central1-FIREBASE_PROJECT_NAME.cloudfunctions.net/pushTo?token=Kd-J4N9pJfQGvaK0


  firebase deploy --only functions
   
