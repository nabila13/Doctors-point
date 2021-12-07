import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';
import Reviews from './Pages/Reviews/Reviews';
import Emergency from './Pages/Footer/Emergency/Emergency';

function App() {
  return (
<AuthProvider>
<BrowserRouter>
 <Header></Header>
<Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route path="/home">
<Home></Home>
</Route>
<PrivateRoute path="/services">
<Services></Services>
</PrivateRoute>
<Route path="/aboutus">
  <AboutUs></AboutUs>
</Route>
<Route path="/reviews">
<Reviews></Reviews>
</Route>
<PrivateRoute path="/emergency">
  <Emergency></Emergency>
</PrivateRoute>
<Route path="/login">
  <Login></Login>
</Route>
<Route path="/signup">
  <Signup></Signup>
</Route>
<Route path="*">
<NotFound></NotFound>
</Route>

</Switch>
 </BrowserRouter>
 <Footer></Footer>
</AuthProvider>
  );
}

export default App;
