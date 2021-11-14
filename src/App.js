import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import About from './components/Home/About/About';
import AddProduct from './components/Home/AddProduct/AddProduct';
import Home from './components/Home/Home/Home';
import MoreProducts from './components/Home/MoreProducts/MoreProducts';
import OrderPlace from './components/Home/OrderPlace/OrderPlace';
import Products from './components/Home/Products/Products';
import Reviews from './components/Home/Reviews/Reviews';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>

          <Route path="/moreProducts">
           <MoreProducts></MoreProducts>
          </Route>

          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>

          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>

          <PrivateRoute path="/buyNow/:buyId">
         <OrderPlace></OrderPlace>
          </PrivateRoute>

          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
          <Register></Register>
          </Route>

          <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
