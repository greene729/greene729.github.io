import React, { Component, Fragment } from 'react';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import { Container } from 'semantic-ui-react';

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Container className='main'>
					<HomePage />
				</Container>
			</Fragment>
		);
	}
}

export default App;
