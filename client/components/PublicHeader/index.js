import React from 'react';
import { showLock } from '../../globals';
import {
    Navbar, 
    Nav, 
    NavItem
} from 'react-bootstrap';


class PublicHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  signUp = () => {
      showLock()
  }

  logIn = () => {
      showLock()
  }

  render() {
    return (
      <div className="public-header-container">
        <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="/">React SPA</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/about">About</NavItem>
                <NavItem eventKey={1} href="/team">Team</NavItem>
                <NavItem eventKey={2} href="/contact">Contact</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="" onTouchTap={this.logIn}>Log In</NavItem>
                <NavItem eventKey={2} href="" onTouchTap={this.signUp}><b>Sign Up</b></NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default PublicHeader;
