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
            <div className="not-found">
              Page Not Found
            </div>
        </PublicPage>
      </div>
    );
  }
}

export default NotFound;
