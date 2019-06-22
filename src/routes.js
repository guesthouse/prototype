import Login from "views/pages/Login.jsx";
import Register from "views/pages/Register.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import Product from 'views/pages/Product/Product.jsx';
import Property from 'views/pages/Property/Property.jsx';
import ProductDetail from 'views/pages/ProductDetail/ProductDetail.jsx';
import PropertyDetail from 'views/pages/PropertyDetail/PropertyDetail.jsx'

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
    name: "Homes",
    icon: "nc-icon nc-book-bookmark",
    component: Property,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-book-bookmark",
    component: Product,
    layout: "/admin"
  },
  {
    path: "/properties/:id",
    name: "Property Detail",
    icon: "nc-icon nc-book-bookmark",
    component: PropertyDetail,
    layout: "/admin"
  },
  {
    path: "/productdetails",
    name: "Product Detail",
    icon: "nc-icon nc-book-bookmark",
    component: ProductDetail,
    layout: "/admin"
  },
  {
    path: "/photos",
    name: "Photos",
    icon: "nc-icon nc-book-bookmark",
    component: ProductDetail,
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
