// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
      apiKey: "AIzaSyDUOEdYPx8XrU7oOFXZ2",
      authDomain: "push-notification.firebaseapp.com",
      databaseURL: "https://push-notification.firebaseio.com",
      projectId: "push-notification",
      storageBucket: "push-notification.appspot.com",
      messagingSenderId: "4",
      appId: "1:478834593960:web:8bd4c1c",
      measurementId: "G-LT"
 });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BCUM93IjEkG_j7DwbwL_bV1ChoWv2jlW7H4-T1dTsWahGMkF7qx-zVfSKCvoT0jOcv3PoKWvG0ufhgo90ysLuew");