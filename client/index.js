import './index.css';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './screens/Team/';
import Terms from './screens/Terms/';
import About from './screens/About/';
import Pricing from './screens/Pricing/';
import Support from './screens/Support/';
import Contact from './screens/Contact/';
import Landing from './screens/Landing/';
import Features from './screens/Features/';
import NotFound from './screens/NotFound/';
import Dashboard from './screens/Dashboard/';
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
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/features" component={Features} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/support" component={Support} />
                <Route path="/team" component={Team} />
                <Route path="/terms" component={Terms} />
                <Route path='*' component={NotFound} />
            </Router>
        </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
