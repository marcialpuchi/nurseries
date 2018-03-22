import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const LandingPage = () => (
  <Container>
    <h1>Landing Page</h1>
    <Link to="/login">Login</Link>
  </Container>
);

export default LandingPage;
