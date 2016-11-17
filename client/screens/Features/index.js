import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="features-screen-container">
        <PublicPage>
          Features
        </PublicPage>
      </div>
    );
  }
}

export default Features;
