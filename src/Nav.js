import React from "react";
import { NavLink } from "react-router-dom";

import burger from "./img/nav-hamburger.png";
import burgerClose from "./img/nav-hamburger-close.png";

const Nav = (props)=> {
 
    return (
      <div className="nav-bar">
        <div className={props.onLoad ? "nav--clicked nav-container" : "nav-container"}>
        <NavLink to="/" className="navh2"><h2>S&J</h2></NavLink>
          <nav className={props.onLoad ? "nav-open" : "nav-close"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="burger" onClick={ ()=>props.handleChange()}>
            <img src={burger} alt="hamburger menu img" className={props.onLoad ? "nav-close" : "nav-open"} />
            <img src={burgerClose} alt="" className={props.onLoad ? "nav-open" : "nav-close"}  />
          </div>
        </div>
      </div>
    );
  }



export default Nav;

