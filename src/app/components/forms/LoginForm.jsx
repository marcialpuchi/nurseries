import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Validator from 'validator';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  };

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};

    if (!Validator.isEmail(data.email)) errors.email = 'Not a valid email address';
    if (!data.password) errors.password = 'can\'t be blank';

    return errors;
  }

  render() {
    const { data, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          error={!!errors.email}
          label="Email"
          type="email"
          name="email"
          placeholder={errors.email ? errors.email : 'something@email.com'}
          value={data.email}
          onChange={this.onChange}
        />
        <Form.Input
          error={!!errors.password}
          label="Password"
          type="password"
          name="password"
          placeholder={errors.password ? errors.email : '********'}
          value={data.password}
          onChange={this.onChange}
        />
        <Button type="submit" primary>Login</Button>
        <Link className="ui button basic blue" to="/signup">Sing up</Link>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
