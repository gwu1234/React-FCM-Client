import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDUOEdYPx8XrU7",
    authDomain: "push-notification.firebaseapp.com",
    databaseURL: "https://push-notification.firebaseio.com",
    projectId: "push-notification",
    storageBucket: "push-notification.appspot.com",
    messagingSenderId: "4788",
    appId: "1:478834593960:web:8bd4c1",
    measurementId: "G-LT0"
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
