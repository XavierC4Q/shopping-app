import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Home'
import Shop from './Shop/Shop'


class App extends Component {
  render() {
    return (
      <div className="appWrap">
    <div>
      <nav>
        <Link to="/shop/clothing">Clothes</Link>
        {" "}
        <Link to="/shop/food">Food</Link>
        {" "}
        <Link to="/">Home</Link>
        {" "}
      </nav>
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
  </div>
    );
  }
}

export default App;
