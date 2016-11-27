import React from 'react';
import PublicPage from '../../layouts/PublicPage/';
import {
  Row,
  Col
  } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-screen-container">
        <PublicPage title="About" cta={false}>
          <div className="about-screen-contents">
            <Row>
              <Col xs={12} sm={6}>
                <h4>The best and brightest React SPA</h4>
                <p>The components with the mostest. The most compelling and easy to use layouts. The best way to get going with your projects.</p>
              </Col>
            </Row>
            <img src="assets/images/code-bg.jpg"/>
            <Row>
              <Col xs={12}>
                <h4>Quality of the SPA</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <p>SPA quality is always an issue nowadays. Most people just copy a template from somewhere change one thing and advertise it as their own. We don't believe it should be that way.</p>
                <p>Our SPA is created from scratch using ReactJS. ReactJS allows developers to code faster and for realtime webpage components to render quickly and efficiently. </p>
              </Col>
              <Col xs={12} sm={6}>
                <p>By using our SPA you're joining the cutting edge of the internet's webpages. Other technologies are appearing but theyre either a clone of ReactJS or they follow the traditional methodologies from yesteryear.</p>
                <p>Moving from Web 1.0 to 2.0 to 5.0 and beyond, the motivation for the webpage has changed. Rather than making "Newspapers Come Alive!" the webpage is a living, breathing entity with always-live connections to the web computers that we know as the internet</p>
              </Col>
            </Row>
          </div>
        </PublicPage>
      </div>
    );
  }
}

export default About;
