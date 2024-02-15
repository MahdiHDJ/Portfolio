import React from "react";
import logo from "../../assests/sun.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nvbarContainer">
      <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <NavLink className="Nav-Link" to="/">
          Home
        </NavLink>
        <NavLink className="Nav-Link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="Nav-Link" to="/contact">
          Contact me
        </NavLink>
        <NavLink className="Nav-Link" to="/feedback">
          Feedbacks
        </NavLink>
      </ul>
      <button className="nav-btn">Start</button>
    </div>
  );
}

export default Navbar;
