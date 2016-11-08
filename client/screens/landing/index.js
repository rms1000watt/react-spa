import React from 'react';
import { browserHistory } from 'react-router';
import { showLock } from '../../globals';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    }

  render() {
    return (
      <div className="landing-container">
        Landing
        <button onClick={showLock}> Login </button>
      </div>
    );
  }
}

export default Landing;
