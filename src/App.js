import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    isLogged: null,
  };
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyABmJG-diBzUSay0P8Q9BSVm1PNLxdZci4',
      authDomain: 'rn-authe.firebaseapp.com',
      databaseURL: 'https://rn-authe.firebaseio.com',
      projectId: 'rn-authe',
      storageBucket: 'rn-authe.appspot.com',
      messagingSenderId: '921630559617',
      appId: '1:921630559617:web:a3fe72e9d913906408ac80',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.setState({isLogged: true});
      this.setState({isLogged: false});
    });
  }

  renderContent() {
    switch (this.state.isLogged) {
      case true:
        return (
          <Button
            onPress={() => {
              firebase.auth().signOut();
            }}
            title="Log Out"
          />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
