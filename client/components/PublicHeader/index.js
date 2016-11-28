import React from 'react';
import { browserHistory } from 'react-router';
import { 
    showLock, 
    isHomePath 
} from '../../globals';
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
        <Navbar className="blue-header-theme" collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a onTouchTap={()=>{browserHistory.push("/")}}>React SPA</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} onTouchTap={()=>{browserHistory.push("/features")}}>Features</NavItem>
                    <NavItem eventKey={1} onTouchTap={()=>{browserHistory.push("/pricing")}}>Pricing</NavItem>
                    <NavItem eventKey={1} onTouchTap={()=>{browserHistory.push("/support")}}>Support</NavItem>
                    <NavItem eventKey={2} onTouchTap={()=>{browserHistory.push("/contact")}}>Contact</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="" onTouchTap={this.logIn}>Log In</NavItem>
                    <NavItem eventKey={2} href="" onTouchTap={this.signUp}><b>Sign Up</b></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PublicHeader;
