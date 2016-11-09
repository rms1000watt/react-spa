import React from 'react';
import PublicPage from '../../layouts/PublicPage/';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <PublicPage>
          Hello World
        </PublicPage>
      </div>
    );
  }
}

export default Landing;
