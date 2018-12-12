import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from './Home';
import Services from './Services';
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
