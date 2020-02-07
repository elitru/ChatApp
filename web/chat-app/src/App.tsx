import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Authenticate from './components/authenticate/Authenticate';
import Chat from './components/chat/Chat';
import Colors from './utils/colors';
import Loader from './components/loader/redirect/Loader';

const App = () => {

  //init colors
  Colors.load();

  const [loader, showLoader, hideLoader] = Loader();

  return (
    <div id="app">
      {loader}
      <Router>
          <Switch>
            <Route path="/authenticate" render={(props) => <Authenticate {...props} loader={loader} showLoader={showLoader} hideLoader={hideLoader} />} />
            <Route path="/chat/messages" render={(props) => <Chat {...props} showLoader={showLoader} hideLoader={hideLoader} />} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
