import React from "react";
import Header from "./Header";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import DemoCarousel from "./Slider";
import Home from "./Home";
import './App.css';

function App() {
  return (
    
      <Router>
        <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header/>
            <DemoCarousel/>
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>

   
  );
}

export default App;
