import React from 'react';
import FAQ from '../../components/FAQ/';
import { browserHistory } from 'react-router';
import PublicPage from '../../layouts/PublicPage/';
import PriceTable from '../../components/PriceTable/';
import { 
  showLock, 
  PRICING_DATA 
} from '../../globals';
import {
  Button,
  Row,
  Col,
  Well
  } from 'react-bootstrap';


let qa = [
  {
    question: "Do I need a card to signup?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text."
  },
  {
    question: "Do I need a card to signup?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text."
  },
  {
    question: "Do I need a card to signup?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text."
  },
  {
    question: "Do I need a card to signup?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text."
  },
]

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    browserHistory.push("/contact")
  }

  render() {
    return (
      <div className="pricing-screen-container">
        <PublicPage title="Pricing">
          <div className="pricing-screen-content">
            <Row>
                {/*<Col xsHidden sm={3}/>*/}
                <Col className="intro" xs={12} sm={6}>
                  <h4>Customized pricing to meet your needs</h4>
                <p>The components with the mostest. The most compelling and easy to use layouts. The best way to get going with your projects.</p>
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

            <Row>
              <Col className="note" xs={12}>
                <p>All plans are fully refundable!</p>
              </Col>
            </Row>

            <FAQ qa={qa} title="Pricing FAQ"/>

            <Row>
                <Col xsHidden sm={2}/>
                <Col xs={12} sm={8}>
                  <Well>
                      <span>Unsure? Contact us about anything at anytime!</span>
                      <Button onTouchTap={this.buttonHandler} bsStyle="warning">Contact</Button>
                  </Well>  
                </Col>
              </Row>
            </div>
        </PublicPage>
      </div>
    );
  }
}

export default Pricing;
