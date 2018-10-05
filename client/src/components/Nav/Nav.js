import React from "react";

const Nav = props => (
  <nav className={`navbar navbar-expand-lg ${props.color} ${props.bottom}`}>
    <a className="navbar-brand" href="/">
	{props.children}
    </a>
  </nav>
);

export default Nav;
