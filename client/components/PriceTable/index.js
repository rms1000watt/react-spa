import React from 'react';
import {
  Button
  } from 'react-bootstrap';

class PriceTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let float = "none";
    let margin = "0 auto";
    if (this.props.ind==0) {float="right";margin="none"}
    if (this.props.ind==this.props.length-1) {float="left";margin="none"}
    return (
      <div className="price-table-container" style={{margin:margin, float:float}}>
        <div className="price">
            <span className="dollar-sign">$</span> 
            <span className="price-value">{this.props.price}</span> 
            <span className="period">/mo</span>
        </div>
        <div className="plan-name">
            {this.props.planName}
        </div>
        <div className="features">
            {this.props.features.map((val, ind)=>{return(
                <div key={ind}>{val}</div>
            )})}
        </div>
        <Button bsStyle="warning" onTouchTap={this.props.buttonHandler}>Start Free Trial</Button>
      </div>
    );
  }
}

export default PriceTable;
