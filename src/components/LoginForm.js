import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: ''});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then()
          .catch((err) => {
            this.setState({error: 'Authentication Failed'});
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            label="Email"
            placeholder="user@email.com"
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            label="Password"
            placeholder="*********"
            hidden={true}
          />
        </CardSection>

        <Text style={{color: '#f00', alignSelf: 'center', fontSize: 20}}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            title="Authenticate"
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
