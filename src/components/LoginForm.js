import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: ''});
    this.setState({loading: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth(() => this.onLoginSuccess())
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      email: '',
      password: '',
      loading: false,
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed!',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) return <Spinner />;
    return (
      <Button title="Authenticate" onPress={this.onButtonPress.bind(this)} />
    );
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

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

export default LoginForm;
