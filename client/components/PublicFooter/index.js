import React from 'react';
import { browserHistory } from 'react-router';
import { 
  Row,
  Col,
  Grid,
  FormGroup,
  FormControl,
  InputGroup,
  Button,
} from 'react-bootstrap';



class PublicFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  submitNewsletter = () => {
    console.log("TODO: submitNewsletter()")
  }

  render() {
    return (
      <div className="public-footer-container">
        <Grid>
          <Row className="footer-container">
            <Col xs={4} sm={3}>
              <h3>Overview</h3>
              <ul>
                <li onTouchTap={()=>{browserHistory.push("/features")}}>Features</li>
                <li onTouchTap={()=>{browserHistory.push("/services")}}>Services</li>
                <li onTouchTap={()=>{browserHistory.push("/pricing")}}>Pricing</li>
                <li onTouchTap={()=>{browserHistory.push("/support")}}>Support</li>
                <li onTouchTap={()=>{browserHistory.push("/comingSoon")}}>Coming Soon</li>
              </ul>
            </Col>
            <Col xs={4} sm={3}>
              <h3>Company</h3>
              <ul>
                <li onTouchTap={()=>{browserHistory.push("/about")}}>About</li>
                <li onTouchTap={()=>{browserHistory.push("/team")}}>Team</li>
                <li onTouchTap={()=>{browserHistory.push("/news")}}>News</li>
                <li onTouchTap={()=>{browserHistory.push("/blog")}}>Blog</li>
                <li onTouchTap={()=>{browserHistory.push("/contact")}}>Contact</li>
              </ul>
            </Col>
            <Col xs={4} sm={2}>
              <h3>Connect</h3>
              <ul>
                {/* TODO: Link to links..*/}
                <li>Youtube</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </Col>
            <Col xs={12} sm={4}>
              <div className="newsletter-form">
                <p>Sign up for the newsletter and we'll inform you of updates, offers and more.</p>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder="Email"/>
                    <InputGroup.Button>
                      <Button onTouchTap={this.submitNewsletter}>Submit</Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row className="credits">
            <Col xsOffset={3} xs={6}>Copyright © 2016. React SPA</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PublicFooter;
