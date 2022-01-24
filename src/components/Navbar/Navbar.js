import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Asset/Logo.png";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <Link to="/" onClick={closeMobileMenu} className="navbar-brand">
            <img
              src={Logo}
              className="navbar-logo"
              style={{ width: "125px" }}
              alt="logo.png"
            ></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={`${click ? "active" : ""} navbar-nav`}>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/services" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/career" className="nav-link">
                Career
              </Link>
            </li>
            <Link to="/contact">
              <Button btnText="Contact Us" />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
