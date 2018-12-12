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


class NavBar {
  constructor(item) {
    this.item = item;
    this.burgerButton = this.item.querySelector(".burger");

    this.content = this.item.querySelector(".nav-container");
    this.navclicked = this.item.querySelector(".nav--clicked");
    this.navitems = this.item.querySelector("nav");
    this.images = this.item.querySelectorAll("img");

    this.hamburgerclose = this.item.querySelector(".hamburger-close");
    // toggle off nav--clicked class, nav anchor tags and x icon on load
    this.content.classList.toggle("nav--clicked");
    this.images[1].style.display = "none"
    this.navitems.style.display = "none";
  
    

    this.burgerButton.addEventListener("click", ()=>this.burgerMenu());

  }
  burgerMenu() {

    // if nav--clicked is toggled on, turn them off and switch back to burger
    if (this.navitems.style.display === "flex") {
      this.navitems.style.display = "none"
      this.images[1].style.display = "none"
      this.images[0].style.display = "block"
    } else {
      // if nav--clicked is toggled off, turn it on and change icon
      this.navitems.style.display = "flex"
      this.images[1].style.display = "block"
      this.images[0].style.display = "none"
    }
  
      this.content.classList.toggle("nav--clicked")
  }
}

let navbar = document.querySelectorAll(".nav-bar")
                       .forEach(item=>new NavBar(item));

