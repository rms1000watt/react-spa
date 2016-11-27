import React from 'react';
import CTA from '../../components/CTA/';
import PublicHeader from '../../components/PublicHeader/';
import PublicFooter from '../../components/PublicFooter/';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


class PublicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="public-layout-container">
        <PublicHeader/>
        
          <Row className={this.props.title ? "title" : "hidden"}>
            <h3>{this.props.title}</h3>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1} lg={1}/>
            <Col xs={12} sm={12} md={10} lg={10}>
              {this.props.children}
            </Col>
            <Col xsHidden smHidden md={1} lg={1}/>
          </Row>
          {this.props.cta ? <CTA/> : ""}
        <PublicFooter/>
      </div>
    );
  }
}

export default PublicPage;
