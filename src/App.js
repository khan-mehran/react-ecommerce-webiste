import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Error from './pages/Error/Error';
import CartScreen from './pages/Cart/CartScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/details/:category' component={Details} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={CartScreen} />
          <Route path='*' component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
