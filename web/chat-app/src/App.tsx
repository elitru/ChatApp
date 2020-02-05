import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Authenticate from './components/authenticate/Authenticate';
import Colors from './utils/colors';
import Loader from './components/loader/redirect/Loader';

const App = () => {

  //init colors
  Colors.load();

  return (
    <div id="app">
      <Router>
          <Switch>
            <Route path="/authenticate" component={Authenticate} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
