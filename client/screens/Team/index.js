import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-container">
        <PublicPage>
          Team
        </PublicPage>
      </div>
    );
  }
}

export default Team;
