import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

const NavBar = () => {
	return (
		<Menu fixed='top'>
			<Container>
				<Menu.Item>
					<Icon name='home' size='large' />
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default NavBar;
