import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDUV5o",
  authDomain: "push.firebaseapp.com",
  databaseURL: "https://puirebaseio.com",
  projectId: "push-notif",
  storageBucket: "push-nspot.com",
  messagingSenderId: "47860",
  appId: "1:4788345d0eb29d",
  measurementId: "G-LL"
};
export const initializeFirebase = () => firebase.initializeApp(firebaseConfig) ;
  