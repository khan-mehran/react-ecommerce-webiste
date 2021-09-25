import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import Detail from './pages/Detail/Detail';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/details/:category' component={Details} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
