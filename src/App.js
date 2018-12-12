import React, { Component } from "react";
import "./index.css";
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav"

class App extends Component {
  render() {
    return (
      <div className="container home-page">
        <Nav />
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
