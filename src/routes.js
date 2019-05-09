import Dashboard from "views/Dashboard.jsx";
import Login from "views/pages/Login.jsx";
import Notifications from "views/components/Notifications.jsx";
import Register from "views/pages/Register.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import Wizard from "views/forms/Wizard.jsx";
import BuildProfile from "views/pages/BuildProfile/BuildProfile.jsx";
import Furniture from 'views/pages/Furniture/Furniture.jsx';
import Property from 'views/pages/Property/Property.jsx'

import firebase from 'firebase';
let userRole = ''
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const db = firebase.firestore();
    let accountRef = db.collection('users').doc(user.email)
    accountRef.get().then( doc => {

    // User is signed in.
    });
  } else {
    // No user is signed in.
  }
});


if (userRole === 'super'){
  const routes =[

  ]
} else if ( userRole === 'maker' ){



} else if ( userRole === 'agent' ){




}
const routes = [
  {
    path: "/furniture",
    name: "Furniture",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-book-bookmark",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/properties",
    name: "LockScreen",
    mini: "LS",
    component: LockScreen,
    layout: "/auth"
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    mini: "UP",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/buildProfile",
    name: "Build Profile",
    icon: "nc-icon nc-ruler-pencil",

    component: Wizard,
  },
]


export default routes;
