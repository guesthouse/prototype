import Login from "views/pages/Login.jsx";
import Register from "views/pages/Register.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import Product from 'views/pages/Product/Product.jsx';
import Property from 'views/pages/Property/Property.jsx';
import ProductDetail from 'views/pages/ProductDetail/ProductDetail.jsx';
import PropertyDetail from 'views/pages/PropertyDetail/PropertyDetail.jsx';
import Photos from 'views/pages/Photos/Photos.jsx'

const routes = [
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-book-bookmark",
    component: Register,
    layout: "/auth",
    display: 'false',
  },
  {
    path: "/user-profile",
    name: "Account & Settings",
    icon: "nc-icon nc-book-bookmark",
    component: UserProfile,
    layout: "/admin",
    display: 'true',
  },
  {
    path: "/properties",
    name: "Homes",
    icon: "nc-icon nc-book-bookmark",
    component: Property,
    layout: "/admin",
    display: 'true',
  },
  {
    path: "/properties/:id",
    name: "Property Detail",
    icon: "nc-icon nc-book-bookmark",
    component: PropertyDetail,
    layout: "/admin",
    display: 'false'
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-book-bookmark",
    component: Product,
    layout: "/admin",
    display: 'true',
  },
  {
    path: "/products/:id",
    name: "Product Detail",
    icon: "nc-icon nc-book-bookmark",
    component: ProductDetail,
    layout: "/admin",
    display: 'false'
  },
  {
    path: "/photos",
    name: "Photos",
    icon: "nc-icon nc-book-bookmark",
    component: Photos,
    layout: "/admin",
    display: 'true'
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-book-bookmark",
    component: Login,
    layout: '/auth',
    display: 'false'
  }

]


export default routes;
