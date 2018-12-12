import React from "react";
import { NavLink } from "react-router-dom";

import burger from "./img/nav-hamburger.png";
import burgerClose from "./img/nav-hamburger-close.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoad: false
    }
  }

  handleChange = ()=> {
    this.setState(prevState => ({onLoad: !prevState.onLoad}))
  }

  componentDidMount() {
    
    
  }


  render() {
    return (
      <div className="nav-bar">
        <div className={this.state.onLoad ? "nav--clicked nav-container" : "nav-container"}>
          <h2>S&J</h2>
          <nav className={this.state.onLoad ? "nav-open" : "nav-close"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="burger" onClick={this.handleChange}>
            <img src={burger} alt="hamburger menu img" className={this.state.onLoad ? "nav-close" : "nav-open"} />
            <img src={burgerClose} alt="" className={this.state.onLoad ? "nav-open" : "nav-close"}  />
          </div>
        </div>
      </div>
    );
  }

}

export default Nav;

