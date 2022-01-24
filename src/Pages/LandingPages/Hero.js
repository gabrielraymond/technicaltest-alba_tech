import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="bg gr1"></div>
      <div className="bg gr2"></div>
      <div className="wrapper container-md">
        <div className="h-wrapper">
          <h1 >Build or scale up</h1>
        </div>
        <div className="h-wrapper">
          <h2>
            <span>your development team</span>
          </h2>
        </div>
        <div className="h-wrapper">
          <h3>
            <div className="line"></div>in weeks, not months
          </h3>
          <Link to="/"><Button btnText="Book now" /></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
