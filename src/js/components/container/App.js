import React, { Component } from 'react';
import SetupTrip from './SetupTrip';

class App extends Component {
	render() {
		return (
			<div className="body">
				<h1>Traveling Contigo</h1>
				<SetupTrip />
			</div>
		);
	}
}

export default App;
