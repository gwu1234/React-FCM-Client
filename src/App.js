import React from 'react';
import firebase from 'firebase';
import "./App.css"

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        message: null,
        userToken: null
    };
    this.messaging = firebase.messaging();
  }
   
  componentDidMount() {
      this.messaging.onMessage((payload) => {
           console.log('Message received. ', payload);
           this.setState ({message: payload})
      });
   }

  requestToken = async () => {
    let userToken= localStorage.getItem('userToken') ;
    if (userToken != "null") {
        console.log("userToken retrieved from local storage : ");
        console.log(userToken);
        this.setState({ userToken, userToken });
      } else {
        try {
             const messaging = firebase.messaging();
             await messaging.requestPermission();
             userToken = await messaging.getToken();
             console.log('user token retrieved from fireabse:', userToken);
             this.setState({ userToken, userToken });
             localStorage.setItem('userToken', userToken);
         } catch (error) {
             console.error(error);
         }
      }
  }
    
  render() {
    const {message, userToken} = this.state;
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
           <button className="Button" onClick={this.requestToken} >
                 Click to receive notification
           </button>
           {msg && <p> {msg} </p>}
           {userToken && <p> {userToken} </p>}          
       </div>
      );
    }
}

export default App;
