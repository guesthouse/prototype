import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import * as firebase from 'firebase';  

import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";
import BuildProfile from 'views/pages/BuildProfile/BuildProfile.jsx';
import PropertyDetail from 'views/pages/PropertyDetail/PropertyDetail.jsx';

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

const hist = createBrowserHistory();
var config = {
  apiKey: "AIzaSyDJi2Hr4Jb1Q1mW4lIFQNHyHr852dAcqY4",
  authDomain: "guesthouse-1f439.firebaseapp.com",
  databaseURL: "https://guesthouse-1f439.firebaseio.com",
  projectId: "guesthouse-1f439",
  storageBucket: "guesthouse-1f439.appspot.com",
};
firebase.initializeApp(config);
export const db = firebase.firestore();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/buildprofile" render={props => <BuildProfile {...props} />} />
      {/* <Redirect from="/" to="/auth/login" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
