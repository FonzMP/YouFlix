import React from 'react';
import logo from './logo.svg';
import Home from './shared/home'
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import NavBar from './shared/navigation/navbar'
import { ApplicationConstants } from './_constants/application.constants'
>>>>>>> f1dcb5edc6ac842af41db6d4b9eb031f39ddf4af
import './App.css';

function App() {
  console.log('process ', process.env.REACT_APP_YOUTUBE_KEY)
  return (
<<<<<<< HEAD
    <div className="App">
      <Home></Home>
    </div>
=======
    <Router>
      <NavBar />
      <div>
        <React.Fragment>
          <Switch>
            <Route exact path={constants.HOME} component={Home}></Route>
            {/*<Route exact path={constants.FAVORITES} component={Home}></Route>
            <Route exact path="/" component={Home}></Route> */}
          </Switch>
        </React.Fragment>
      </div>
    </Router>
>>>>>>> f1dcb5edc6ac842af41db6d4b9eb031f39ddf4af
  );
}

export default App;
