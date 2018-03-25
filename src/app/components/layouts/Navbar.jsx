import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const Navbar = () => (
  <Segment vertical inverted>
    <Menu pointing secondary inverted>
      <Container>
        <Menu.Item name="One" active />
        <Menu.Item name="Two" />
        <Menu.Item name="Three" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Link className="ui button basic blue" to="/login">Log In</Link>
          </Menu.Item>
          <Menu.Item>
            <Link className="ui button basic grey" to="/signup">Sing Up</Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </Segment>
);

export default Navbar;
