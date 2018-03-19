import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';

const App = () => (
	<div>
		<Route path='/' exact component={LandingPage}/>
		<Route path='/login' exact component={LoginPage}/>
	</div>
);

export default App;
