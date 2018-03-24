import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import LoginForm from '../components/forms/LoginForm';
import { firebaseAuth } from '../../firebase';

class LoginPage extends Component {
  submit = (data) => {
    firebaseAuth.signInWithEmailAndPassword(data.email, data.password).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Container>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </Container>
    );
  }
}

export default LoginPage;
