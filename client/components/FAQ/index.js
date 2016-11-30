import React from 'react';
import {
  Row,
  Col
  } from 'react-bootstrap';


class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="faq-container">
        <Row>
            <Col className="faq-title" xs={12}>
                <h4>{this.props.title ? this.props.title : "Frequently Asked Questions"}</h4>
            </Col>
        </Row>
        <Row>
            {this.props.qa.map((val, ind)=>{return(
                <Col className="qa" key={ind} xs={12} sm={6}>
                    <h5>{val.question}</h5>
                    <p>{val.answer}</p>
                </Col>
            )})}
        </Row>
      </div>
    );
  }
}

export default FAQ;
