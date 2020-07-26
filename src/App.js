import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import './App.css';
import Navigator from './components/Navigator';

function App() {
	return (
		<HashRouter>
			<Navigator />
			<Route path="/" exact={true} component={Home}></Route>
			<Route path="/about" component={About}></Route>
		</HashRouter>
	);
}

export default App;
