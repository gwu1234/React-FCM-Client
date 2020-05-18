// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
      apiKey: "AIzaSyDUOEdYPx8XrU7oOFXZ2fEqzYTPpXwjV5o",
  authDomain: "push-notification-c077d.firebaseapp.com",
  databaseURL: "https://push-notification-c077d.firebaseio.com",
  projectId: "push-notification-c077d",
  storageBucket: "push-notification-c077d.appspot.com",
  messagingSenderId: "478834593960",
  appId: "1:478834593960:web:8bd4c1ca8a6f7b2d0eb29d",
  measurementId: "G-LT0ZDWYEWL"
 });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BCUM93IjEkG_j7DwbwL_bV1ChoWv2jlW7H4-T1dTsWahGMkF7qx-zVfSKCvoT0jOcv3PoKWvG0ufhgo90ysLuew");