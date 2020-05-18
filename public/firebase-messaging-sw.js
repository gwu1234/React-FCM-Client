// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
      apiKey: "AIzaSyDUOEdYPx8",
  authDomain: "push-notifica.firebaseapp.com",
  databaseURL: "https://push-notificatio",
  projectId: "push-notification-c077d",
  storageBucket: "push-notifi",
  messagingSenderId: "478",
  appId: "1:478834593960:web:8",
  measurementId: "G-LT0ZDWYEWL"
 });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BCUM93IjEkG_j7DwbwL_bV1ChoWv2jlW7H4-T1dTsWahGMkF7qx-zVfSK");