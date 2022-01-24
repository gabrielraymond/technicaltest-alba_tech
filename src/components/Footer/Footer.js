import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-4">
      <div className="container">
      <hr />
        <div className="row mt-5">
          <div className="col-lg-6">
            <img
              src="Asset/Logo.png"
              alt="logo"
              style={{ width: "125px" }}
            ></img>
            <p>
              PT. Alba Digital Teknologi is a digital agency that has the
              tagline "Provide The Best Digital Experience for Your Business".
              We have to provide the best digital experience for our clients.
            </p>
            <div className="social-media">
              <a href="http://www.facebook.com"><span><img src="Asset/icon/Fb.png" alt="facebook" /></span></a>
              <a href="http://www.instagram.com"><span><img src="Asset/icon/Ig.png" alt="instagram" /></span></a>
              <a href="http://www.linkedin.com"><span><img src="Asset/icon/Linked.png" alt="linkedin" /></span></a>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Website</h4>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Service</Link></li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Career</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Contact</h4>
            <p>
              The Prominence Blok 38D, No.25 Jl. Jalur Sutera Bar. No.25,
              RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota Tangerang,
              Banten 15143
            </p>

            <p>
              <b>P</b>: +62 812 9901 9909
            </p>
            <p>
              <b>E</b>: info@albatech.id
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p><span>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</span></p>
          <p><span>Privacy policy | Terms of service</span></p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
