import React from 'react';
import CTA from '../../components/CTA/';
import PriceTable from '../../components/PriceTable/';
import PublicHeader from '../../components/PublicHeader/';
import PublicFooter from '../../components/PublicFooter/';
import { 
  showLock, 
  PRICING_DATA 
} from '../../globals';
import {
  Button,
  Row,
  Col,
  Image
  } from 'react-bootstrap';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }


  buttonHandler = () => {
    showLock()
  }

  render() {
    return (
      <div className="landing-screen-container">
        
        <div className="hero-container">
          <PublicHeader/>
          <Row>
              <Col xsHidden smHidden md={1}/>
              <Col sm={6} md={5}>
                <div className="hero">
                    <h2>BLAH BLAH BLAH BLAH BLAH BLAH</h2>
                    <p className="sub-text">Lorem ipsum ponderum assentior dolor sit amet, illum ponderum assentior ne mei.</p>
                    <p><Button onTouchTap={this.buttonHandler} bsStyle="warning">Sign Up for Free</Button></p>
                </div>
              </Col>
              <Col sm={6} md={5}>
                <img className="hero-img" src="/assets/images/static-hero.png"/>
              </Col>
              <Col xsHidden smHidden md={1}/>
          </Row>
        </div>


        <div className="features-container">
          <Row className="section-header">
            <Col xs={12} className="title">
              <h4>Automated editable testable blahable?</h4>
              <h5>Reach out to all others alike and the sorts of things.</h5>
            </Col>
          </Row>

          <Row className="feature">
            <Col xsHidden sm={1} md={2}/>
            <Col sm={5} md={4} className="info">
              <h5>This is a great feature</h5>
              <p>This feature is so great it will be great as a feature among your features.</p>
            </Col>
            <Col sm={5} md={4} className="image">
              <img src="/assets/images/static-hero.png"/>
            </Col>
            <Col xsHidden sm={1} md={2}/>
          </Row>

          <div className="divider"/>

          <Row className="feature">
            <Col xsHidden sm={1} md={2}/>
            <Col sm={5} md={4} className="image">
              <img src="/assets/images/static-hero.png"/>
            </Col>
            <Col sm={5} md={4} className="info">
              <h5>This is a great feature</h5>
              <p>This feature is so great it will be great as a feature among your features.</p>
            </Col>
            <Col xsHidden sm={1} md={2}/>
          </Row>
        </div>


        <div className="demonstration-container">
          <Row className="section-header">
            <Col xs={12} className="title">
              <h4>See it in Action</h4>
            </Col>
          </Row>
          <Row className="demonstration">
            <Col xs={12}>
              <img src="/assets/images/demo.png"/>
            </Col>
          </Row>
        </div>


        <div className="pricing-container">
          <Row className="section-header">
            <Col xs={12} className="title">
              <h4>Automated editable testable blahable?</h4>
              <h5>Reach out to all others alike and the sorts of things.</h5>
            </Col>
          </Row>
          <Row className="price-table">
              {PRICING_DATA.map((val, ind)=>{
                return(
                <Col key={ind} xs={12} smOffset={3} sm={6} mdOffset={0} md={12/PRICING_DATA.length}>
                  <PriceTable ind={ind} features={val.features} planName={val.planName} length={PRICING_DATA.length} price={val.price} buttonHandler={this.buttonHandler}/>
                </Col>
              )})}
          </Row>
        </div>


        <div className="industry-container">
          <Row className="section-header">
            <Col xs={12} className="title">
              <h4>Here are industries that can use this!</h4>
            </Col>
          </Row>
          <Row className="industries">
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/assets/images/thumbnail.png" rounded responsive />
              <h5>Industrial</h5>
            </Col>
          </Row>
        </div>

        <CTA/>
        
        <PublicFooter/>
      </div>
    );
  }
}

export default Landing;
