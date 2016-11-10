import './index.css';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './screens/landing/';
import NotFound from './screens/NotFound/';
import Dashboard from './screens/dashboard/';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

injectTapEventPlugin();

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                <Route path="/" component={Landing}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path='*' component={NotFound} />
            </Router>
        </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
