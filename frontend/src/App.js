import { Container } from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom'


import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';


function App() {
  return (
    <Router>
     <Header/>
     <main className="py-3">
       <Container>
       <Route path="/" component={HomeScreen} exact/>
       <Route path="/login" component={LoginScreen}/>
       <Route path="/register" component={RegisterScreen}/>
       <Route path="/profile" component={ProfileScreen}/>
       <Route path="/shipping" component={ShippingScreen}/>
       <Route path="/payment" component={PaymentScreen}/>
       <Route path="/product/:id" component={ProductScreen}/>
       <Route path="/cart/:id?" component={CartScreen}/>

       </Container>
       
     </main>
      <Footer/>
       
    </Router>
  );
}

export default App;
