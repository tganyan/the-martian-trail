import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import styleVars from '../../styleVars'

import Auth from '../auth/auth';
import CharacterUI from '../characterUI/characterUI';
import PartyAssembly from '../partyAssembly/partyAssembly';
import Profile from '../profile/profile';

const Nav = styled.nav`
  width: 50%;
  margin: 0 auto;
`;
const NavList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-around;
`;
const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${styleVars.colors.gray};
    font-size: ${styleVars.fontSizes.big};
  }
`;

function Landing() {
	return (
		<div>
			<Auth />
			<BrowserRouter>
				<div>
					<Nav>
						<NavList>
							<NavItem><Link to='user-profile'>Profile</Link></NavItem>
							<NavItem><Link to='character-editor'>Create/Edit Character</Link></NavItem>
							<NavItem><Link to='party-assembly'>Start</Link></NavItem>
						</NavList>
					</Nav>
					<Route exact path={'/user-profile'} component={Profile} />
					<Route exact path={'/character-editor'} component={CharacterUI} />
					<Route exact path={'/party-assembly'} component={PartyAssembly} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default Landing;