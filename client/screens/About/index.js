import React from 'react';
import PublicPage from '../../layouts/PublicPage/';
import {
  Row,
  Col,
  Image
  } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <PublicPage>
          About
        </PublicPage>
      </div>
    );
  }
}

export default About;
