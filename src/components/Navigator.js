import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
	return (
		<div className="navigator">
			<Link className="link" to="/">
				Home
			</Link>
			<Link className="link" to="/about">
				About
			</Link>
		</div>
	);
}

export default Navigator;
