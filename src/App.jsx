/* Import necessary plugins */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Loadable from 'react-loadable';

/* Create loading indicator */
const Loading = () => <div>Loading...</div>;

/* Make components loadable (code-splitting) */

/* Navigation Bar */
const Navbar = Loadable({
  loader: () => import('./containers/Navbar'),
  loading: () => <div />,
});

/* Core components */
const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

/* Core components */
const About = Loadable({
  loader: () => import('./containers/About'),
  loading: Loading,
});

export const App = () => (
  <Router>
    <div id="app">
      <Navbar />
      <div>
        <Switch>
          {/* Core routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
