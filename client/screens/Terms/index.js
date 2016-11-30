import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Terms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="terms-container">
        <PublicPage title="Terms and Conditions">
          Terms
        </PublicPage>
      </div>
    );
  }
}

export default Terms;
