import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Support extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="support-container">
        <PublicPage title="Support">
          Support
        </PublicPage>
      </div>
    );
  }
}

export default Support;
