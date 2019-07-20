import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './shared/navigation/navbar'
import { ApplicationConstants } from './_constants/application.constants'
import './App.css';

const constants = ApplicationConstants;
function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <React.Fragment>
          <Switch>
            {/* <Route exact path={constants.HOME} component={Home}></Route>
            <Route exact path={constants.FAVORITES} component={Home}></Route>
            <Route exact path="/" component={Home}></Route> */}
          </Switch>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;
