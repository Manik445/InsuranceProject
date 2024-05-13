
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import Cart from "../cart/Cart";


function Navbar() {
  const [nav, setNav] = useState(false);    
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Policy <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
        <Link to="/Policies" className="navbar-links">
      Policies
        </Link>
        </li>
        <li>
        <Link to="/about" className="navbar-links">
      About
        </Link>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
        <Link to="/Partners" className="navbar-links">
        Partners
         </Link>
        </li>
      </ul>


      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#partners">
              Partners
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="right-nav">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 40, height: 40 }}
        className="avatar"
      />
      <Cart/>
      </div>
    </div>
  );
}

export default Navbar;
