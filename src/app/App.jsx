import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <div>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/dashboard" exact component={DashboardPage} />
    <Route path="/signup" exact component={SignupPage} />
  </div>
);

export default App;
