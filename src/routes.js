import Dashboard from "views/Dashboard.jsx";
import Login from "views/pages/Login.jsx";
import Notifications from "views/components/Notifications.jsx";
import Register from "views/pages/Register.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import Wizard from "views/forms/Wizard.jsx";
import BuildProfile from "views/pages/BuildProfile/BuildProfile.jsx";
import Furniture from 'views/pages/Furniture/Furniture.jsx';
import Property from 'views/pages/Property/Property.jsx';
import FurnitureDetail from 'views/pages/FurnitureDetail/FurnitureDetail.jsx';
import PropertyDetail from 'views/pages/PropertyDetail/PropertyDetail.jsx'

import firebase from 'firebase';



const routes = [
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-book-bookmark",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/user-profile",
    name: "Account & Settings",
    icon: "nc-icon nc-book-bookmark",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/property",
    name: "Property",
    icon: "nc-icon nc-book-bookmark",
    component: Property,
    layout: "/admin"
  },
  {
    path: "/furniture",
    name: "Furniture",
    icon: "nc-icon nc-book-bookmark",
    component: Furniture,
    layout: "/admin"
  },
  {
    path: "/propertydetails",
    name: "Property Detail",
    icon: "nc-icon nc-book-bookmark",
    component: PropertyDetail,
    layout: "/admin"
  },
  {
    path: "/furnituredetails",
    name: "Furniture Detail",
    icon: "nc-icon nc-book-bookmark",
    component: FurnitureDetail,
    layout: "/admin"
  },
  {
    path: "/photos",
    name: "Photos",
    icon: "nc-icon nc-book-bookmark",
    component: FurnitureDetail,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-book-bookmark",
    component: Login,
    layout: '/auth'
  }

]


export default routes;
