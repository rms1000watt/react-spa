import React from 'react';
import Hero from '../../components/Hero/';
import PriceTable from '../../components/PriceTable/';
import PublicHeader from '../../components/PublicHeader/';
import PublicFooter from '../../components/PublicFooter/';
import { 
  showLock 
} from '../../globals';
import {
  Button,
  Row,
  Col
  } from 'react-bootstrap';


let pricingData = [
  {
    price: 49,
    planName: "Bronze",
    features: [
      "Bronze feature here",
      "Other Bronze stuff",
      "Oh wow its Bronze",
      "Even more features",
      "Even more features",
    ],
  },
  {
    price: 99,
    planName: "Silver",
    features: [
      "Silver good feature",
      "Silver awesome feature",
      "Feature for silver",
      "Even more features",
      "Even more features",
    ],
  },
  {
    price: 199,
    planName: "Gold",
    features: [
      "Gold best features",
      "Features for Gold",
      "Gold features here",
      "Featues for Gold is best",
      "Another row?!"
    ],
  },
]

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }


  buttonHandler = () => {
    showLock()
  }

  render() {
    return (
      <div className="landing-container">
        
        <div className="hero-container">
          <PublicHeader/>
          <Row>
              <Col xsHidden smHidden md={1}/>
              <Col sm={6} md={5}>
                <div className="hero">
                    <h2>BLAH BLAH BLAH BLAH BLAH BLAH</h2>
                    <p className="sub-text">Lorem ipsum ponderum assentior dolor sit amet, illum ponderum assentior ne mei.</p>
                    <p><Button onTouchTap={this.buttonHandler} bsStyle="primary">Signup for Free</Button></p>
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
            <Col xsHidden smHidden md={1}/>
            <Col sm={6} md={5} className="info">
              <h5>This is a great feature</h5>
              <p>This feature is so great it will be great as a feature among your features.</p>
            </Col>
            <Col sm={6} md={5} className="image">
              <img src="/assets/images/static-hero.png"/>
            </Col>
            <Col xsHidden smHidden md={1}/>
          </Row>

          <div className="divider"/>

          <Row className="feature">
            <Col xsHidden smHidden md={1}/>
            <Col sm={6} md={5} className="image">
              <img src="/assets/images/static-hero.png"/>
            </Col>
            <Col sm={6} md={5} className="info">
              <h5>This is a great feature</h5>
              <p>This feature is so great it will be great as a feature among your features.</p>
            </Col>
            <Col xsHidden smHidden md={1}/>
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
              {pricingData.map((val, ind)=>{
                return(
                <Col key={ind} xs={12} smOffset={3} sm={6} mdOffset={0} md={12/pricingData.length}>
                  <PriceTable ind={ind} features={val.features} planName={val.planName} length={pricingData.length} price={val.price} buttonHandler={this.buttonHandler}/>
                </Col>
              )})}
          </Row>
          <div className="pricing-background"/>
        </div>

        <div className="demonstration-container">
        </div>

        <div className="testimonials-container">
        </div>

        <div className="clients-container">
        </div>

        <div className="cta-container">
        </div>

        <PublicFooter/>
      </div>
    );
  }
}

export default Landing;
