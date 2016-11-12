import React from 'react';
import { 
  Button,
  Row,
  Col,
} from 'react-bootstrap';

let backgroundStyle = {
  width: window.innerWidth,
}

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Row>
            <Col sm={6}>
            <div className="hero">
                <h2>{this.props.mainText}</h2>
                <p className="sub-text">{this.props.subText}</p>
                {this.props.primaryButton ? <p>{this.props.primaryButton}</p> : ""}
                {this.props.secondaryButton ? <p>{this.props.secondaryButton}</p> : ""}
            </div>
            </Col>
            <Col sm={6}>
            <img className="hero-img" src={this.props.img}/>
            </Col>
        </Row>
        <div className="hero-background" style={backgroundStyle}/>
      </div>
    );
  }
}

export default Hero;
