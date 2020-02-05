import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Authenticate from './components/authenticate/Authenticate';

const App = () => {
  return (
    <div id="app">
      <Router>
          <Switch>
            <Route path="/" component={Authenticate} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
