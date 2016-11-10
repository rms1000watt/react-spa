import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="not-found-container">
         <PublicPage>
            Page Not Found
        </PublicPage>
      </div>
    );
  }
}

export default NotFound;
