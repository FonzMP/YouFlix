import React from "react";
import logo from "./logo.svg";
import Home from "./shared/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faUser,
  faRunning,
  faMusic,
  faHeadset,
  faVideo,
  faTv
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./shared/navigation/navbar";
import { ApplicationConstants } from "./_constants/application.constants";
import "./App.css";
import SideBar from "./shared/sidebar/sidebar";

library.add(faBell, faUser, faRunning, faMusic, faHeadset, faVideo, faTv);

const constants = ApplicationConstants;
function App() {
  return (
    <div className="appWrapper">
      <Router>
        <NavBar />
        <SideBar />
        <div className="contentBody">
          <React.Fragment>
            <Switch>
              <Route exact path={constants.HOME} component={Home} />
              {/*<Route exact path={constants.FAVORITES} component={Home}></Route>
            <Route exact path="/" component={Home}></Route> */}
            </Switch>
          </React.Fragment>
        </div>
      </Router>
    </div>
  );
}

export default App;
