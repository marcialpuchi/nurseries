import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import LoginForm from '../components/forms/LoginForm';

class LoginPage extends Component {
  submit = (data) => {
    console.log(data);
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
