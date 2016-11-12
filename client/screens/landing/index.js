import React from 'react';
import Hero from '../../components/Hero/';
// import Features from '../../components/Features/';
import PublicPage from '../../layouts/PublicPage/';
import {
  Button,
  Row,
  Col
  } from 'react-bootstrap';


let backgroundStyle = {
  width: window.innerWidth,
}

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    console.log("BUTTON CLICKED")
  }

  render() {
    return (
      <div className="landing-container">
        <PublicPage>
          
          <div className="hero-container">
            <Row>
                <Col sm={6}>
                <div className="hero">
                    <h2>BLAH BLAH BLAH BLAH BLAH BLAH</h2>
                    <p className="sub-text">Lorem ipsum ponderum assentior dolor sit amet, illum ponderum assentior ne mei.</p>
                    <p><Button onTouchTap={this.buttonHandler}>Signup for Free</Button></p>
                </div>
                </Col>
                <Col sm={6}>
                <img className="hero-img" src="/assets/images/static-hero.png"/>
                </Col>
            </Row>
            <div className="hero-background" style={backgroundStyle}/>
          </div>

          <div className="features-container">
            <Row className="header">
              <Col xs={12} className="title">
                <h4>Automated editable testable blahable?</h4>
                <h5>Reach out to all others alike and the sorts of things.</h5>
              </Col>
            </Row>
            <Row className="feature">
              <Col sm={6} className="info">
                <h5>This is a great feature</h5>
                <p>This feature is so great it will be great as a feature among your features.</p>
              </Col>
              <Col sm={6} className="image">
                <img src="/assets/images/static-hero.png"/>
              </Col>
            </Row>
            <div className="divider"/>
            <Row className="feature">
              <Col sm={6} className="image">
                <img src="/assets/images/static-hero.png"/>
              </Col>
              <Col sm={6} className="info">
                <h5>This is a great feature</h5>
                <p>This feature is so great it will be great as a feature among your features.</p>
              </Col>
            </Row>
          </div>

          <div className="pricing-container">
          </div>

          <div className="demonstration-container">
          </div>

          <div className="testimonials-container">
          </div>

          <div className="clients-container">
          </div>

          <div className="cta-container">
          </div>

        </PublicPage>
      </div>
    );
  }
}

export default Landing;
