import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    firebase.initializeApp({
      apiKey: 'AIzaSyABmJG-diBzUSay0P8Q9BSVm1PNLxdZci4',
      authDomain: 'rn-authe.firebaseapp.com',
      databaseURL: 'https://rn-authe.firebaseio.com',
      projectId: 'rn-authe',
      storageBucket: 'rn-authe.appspot.com',
      messagingSenderId: '921630559617',
      appId: '1:921630559617:web:a3fe72e9d913906408ac80',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
