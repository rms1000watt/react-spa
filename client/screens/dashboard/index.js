import React from 'react';
import { browserHistory } from 'react-router';
import { isLoggedIn, logout } from '../../globals';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
		if (!isLoggedIn()){
			browserHistory.push('/');
			return
		}
	}

  render() {
    return (
      <div className="dashboard-container">
        Dashboard
        <button onClick={logout}> Logout </button>
      </div>
    );
  }
}

export default Dashboard;
