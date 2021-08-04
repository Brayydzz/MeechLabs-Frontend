import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home"
import Limited from "./pages/Limited"
import About from "./pages/About"
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/products" component={AllProducts}/>
        <Route exact path="/limited" component={Limited}/>
      </Switch>
    </Router>
  );
}

export default App;
