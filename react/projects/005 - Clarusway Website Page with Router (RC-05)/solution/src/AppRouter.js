import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Html from './pages/Html';
import Css from './pages/Css';
import Logo from './pages/Logo';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/html" component={Html} />
        <Route path="/css" component={Css} />
        <Route path="/logo" component={Logo} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
