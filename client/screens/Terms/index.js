import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Terms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="terms-container">
        <PublicPage>
          Terms
        </PublicPage>
      </div>
    );
  }
}

export default Terms;
