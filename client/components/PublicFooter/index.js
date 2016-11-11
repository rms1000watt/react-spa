import React from 'react';
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

  render() {
    return (
      <div className="public-footer-container">
        <Grid>
          <Row className="footer-container">
            <Col sm={3}>
              <h3>Overview</h3>
              <ul>
                <li>Features</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Support</li>
                <li>Coming Soon</li>
              </ul>
            </Col>
            <Col sm={3}>
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>News</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col sm={2}>
              <h3>Connect</h3>
              <ul>
                <li>Youtube</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </Col>
            <Col sm={4}>
              <div className="newsletter-form">
                <p>Sign up for the newsletter and we'll inform you of updates, offers and more.</p>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder="Email"/>
                    <InputGroup.Button>
                      <Button>Submit</Button>
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
