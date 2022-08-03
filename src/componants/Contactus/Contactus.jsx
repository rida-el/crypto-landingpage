import React, { Component } from "react";
import data from "../data/contactus.json";
import "./Contactus.css";
function Contactus() {
  return (
    <div className="contactus-section">
      <h1 className="contact-title"></h1>
      <p className="contact-paragraph"></p>
      <div className="contact-cards">
        {data.map((item, i) => (
          <div className="contact-card">
            <img className="card-icon" src={item.logo} />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-paragraph">{item.paragraph}</p>
            <a className="card-button" href="">
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contactus;