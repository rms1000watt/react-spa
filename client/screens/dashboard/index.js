import React from 'react';
import { browserHistory } from 'react-router';
import { isLoggedIn } from '../../globals';


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
        TODO: Add Logout button in AppHeader
      </div>
    );
  }
}

export default Dashboard;
