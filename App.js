import React, { Component } from 'react';
import      AppWrapper      from './components/containers/AppWrapper';
import './App.sass'


export default class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<AppWrapper/>
				</div>
			</div>
		);
	}
}