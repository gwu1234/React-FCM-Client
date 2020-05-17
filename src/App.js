import React from 'react';
import firebase from 'firebase';
import "./App.css"
import { askForPermissionToReceiveNotifications } from './push-notification';
//const messaging = firebase.messaging();

class App extends React.Component {
  //this.messaging = firebase.messaging();

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
        message: null 
    };
    this.messaging = firebase.messaging();
  }
   
  //const messaging = firebase.messaging();
  componentDidMount() {
      //const messaging = firebase.messaging();
      this.messaging.onMessage((payload) => {
           console.log('Message received. ', payload);
           this.setState ({message: payload})
      });
   }
  
  render() {
    const {message} = this.state;
    let msg = "";
    if (message) {
         console.log (message.notification.body);
         msg = message.notification.body ;
    }

    return (
       <div className="App">
           <header className="App-header"> 
                Learn React
           </header>
           <button className="Button" onClick={askForPermissionToReceiveNotifications} >
                 Click to receive notification
           </button>
           {msg && <p> {msg} </p>}
           
       </div>
      );
    }
}

export default App;
