import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pricing-screen-container">
        <PublicPage>
          Pricing
        </PublicPage>
      </div>
    );
  }
}

export default Pricing;
