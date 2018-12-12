import React from "react";
import burger from "./img/nav-hamburger.png";
import burgerClose from "./img/nav-hamburger-close.png"


class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
		<div className="nav--clicked nav-container">
			<h2>S&J</h2>
			<nav class="nav-hidden">
				<a href="index.html">Home</a>
				<a href="services.html">Services</a>
				<a href="contact.html">Contact</a>
			</nav>
			<div className="burger">
				<img src={burger} alt="hamburger menu img" />
				<img src={burgerClose} alt="" />
			</div>
		</div>
	</div>
    )
  }
}

export default Nav;