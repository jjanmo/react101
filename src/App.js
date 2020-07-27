import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigator from './components/Navigator';
import './App.css';

function App() {
	return (
		<HashRouter>
			<Navigator />
			<Route path="/" exact={true} component={Home}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/detail/:id" component={Detail}></Route>
		</HashRouter>
	);
}

export default App;
