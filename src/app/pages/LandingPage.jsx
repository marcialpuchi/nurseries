import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Navbar from '../components/layouts/Navbar';

const LandingPage = () => (
  <div>
    <Navbar />
    <Segment vertical className="center aligned landing-hero">
      <Container text>
        <h1 className="header">Awesome title</h1>
        <h2 className="header">cool subtitle</h2>
      </Container>
    </Segment>
  </div>
);

export default LandingPage;
