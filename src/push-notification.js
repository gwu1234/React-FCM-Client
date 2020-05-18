import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDUOEdYPx8XrU7oOFXZ2fEqzYTPpXwjV5o",
  authDomain: "push-notification-c077d.firebaseapp.com",
  databaseURL: "https://push-notification-c077d.firebaseio.com",
  projectId: "push-notification-c077d",
  storageBucket: "push-notification-c077d.appspot.com",
  messagingSenderId: "478834593960",
  appId: "1:478834593960:web:8bd4c1ca8a6f7b2d0eb29d",
  measurementId: "G-LT0ZDWYEWL"
};
export const initializeFirebase = () => firebase.initializeApp(firebaseConfig) ;
  

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}
