import React, { Component } from "react";

import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Ready to get started?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="footer-button">
          <a href="">Get started</a>
        </div>
      </div>
      <div className="footer-right">
        <h3 style={{ color: "#8F60FF" }}>Navigation</h3>
        <h3>Email Marketin</h3>
        <h3>Compaigns</h3>
        <h3>Branding</h3>
        <h3>Offline</h3>
      </div>
    </div>
  );
}

export default Footer;
