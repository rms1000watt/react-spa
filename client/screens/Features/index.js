import React from 'react';
import { showLock } from '../../globals';
import PublicPage from '../../layouts/PublicPage/';
import {
  Row,
  Col,
  Well,
  Button
  } from 'react-bootstrap';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    showLock()
  }

  render() {
    return (
      <div className="features-screen-container">
        <PublicPage title="Features">
          <div className="features-screen-contents">

            <Row>
              <Col xsHidden sm={3}/>
              <Col className="intro" xs={12} sm={6}>
                <h4>The best and brightest React SPA</h4>
                <p>The components with the mostest. The most compelling and easy to use layouts. The best way to get going with your projects.</p>
              </Col>
            </Row>
            
            <Row>
              <Col xs={12} sm={6}>
                <img src="/assets/images/demo.png"/>
              </Col>
              <Col xs={12} sm={5}>
                <h4>Unique Capabilities</h4>
                <p>The SPA with best organization: Assets, Components, Layouts, Screens, globals</p>
              </Col>
            </Row>

            <div className="divider"/>
            
            <Row>
              <Col xsHidden sm={1}/>
              <Col xsHidden sm={5}>
                <h4>Unique Capabilities</h4>
                <p>The SPA with best organization: Assets, Components, Layouts, Screens, globals</p>
              </Col>
              <Col xs={12} sm={6}>
                <img src="/assets/images/demo.png"/>
              </Col>
              <Col xs={12} smHidden mdHidden lgHidden xlHidden>
                <h4>Unique Capabilities</h4>
                <p>The SPA with best organization: Assets, Components, Layouts, Screens, globals</p>
              </Col>
            </Row>

            <div className="divider"/>

            <Row>
              <Col className="mini-header" xs={12}>
                <h4>Awesome Capabilities</h4>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={4}>
                <img src="/assets/images/static-hero.png"/>
                <h5>Blah blee bloo</h5>
                <p>This is how we do it. Its friday night and the feelings right. Party down on the westside.</p>
              </Col>
              <Col xs={12} sm={4}>
                <img src="/assets/images/static-hero.png"/>
                <h5>Blah blee bloo</h5>
                <p>This is how we do it. Its friday night and the feelings right. Party down on the westside.</p>
              </Col>
              <Col xs={12} sm={4}>
                <img src="/assets/images/static-hero.png"/>
                <h5>Blah blee bloo</h5>
                <p>This is how we do it. Its friday night and the feelings right. Party down on the westside.</p>
              </Col>
            </Row>

            <div className="divider"/>
            
            <Row>
              <Col className="finale" xs={12}>
                <h4>Unique Capabilities</h4>
                <p>The SPA with best organization: Assets, Components, Layouts, Screens, globals</p>
                <img src="/assets/images/demo.png"/>
              </Col>
            </Row>

            <Row>
              <Col xsHidden sm={2}/>
              <Col xs={12} sm={8}>
                <Well>
                    <span>Use React SPA now with all of these features!</span>
                    <Button onTouchTap={this.buttonHandler} bsStyle="warning">Sign Up</Button>
                </Well>  
              </Col>
            </Row>
            
          </div>
        </PublicPage>
      </div>
    );
  }
}

export default Features;
