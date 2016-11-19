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
        <Navbar className={isHomePath() ? "blue-header-theme" : "blue-header-theme"}>
            <Navbar.Header>
            <Navbar.Brand>
                <a onTouchTap={()=>{browserHistory.push("/")}}>React SPA</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} onTouchTap={()=>{browserHistory.push("/about")}}>About</NavItem>
                <NavItem eventKey={1} onTouchTap={()=>{browserHistory.push("/team")}}>Team</NavItem>
                <NavItem eventKey={2} onTouchTap={()=>{browserHistory.push("/contact")}}>Contact</NavItem>
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
