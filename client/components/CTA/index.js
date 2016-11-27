import React from 'react';
import { showLock } from '../../globals';
import {
  Row,
  Col,
  Button
  } from 'react-bootstrap';


class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    showLock()
  }

  render() {
    return (
        <div className="cta-container">
            <Row className="section-header">
                <Col xs={12} className="title">
                    <h4>Join the Open Beta Today!</h4>
                </Col>
            </Row>
            <Button onTouchTap={this.buttonHandler} bsStyle="warning">Sign Up for Free</Button>
        </div>
    );
  }
}

export default CTA;
