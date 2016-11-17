import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="services-container">
        <PublicPage>
          Services
        </PublicPage>
      </div>
    );
  }
}

export default Services;
