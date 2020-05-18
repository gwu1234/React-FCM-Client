import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDUOEdYPx8XrU7oOFX",
  authDomain: "push-notific",
  databaseURL: "https://push-rebaseio.com",
  projectId: "push-notifi",
  storageBucket: "push-notifica.appspot.com",
  messagingSenderId: "4788",
  appId: "1:478834593960",
  measurementId: "G-LT"
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
