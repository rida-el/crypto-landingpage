import React, { Component, useEffect } from "react";
import data from "../data/contactus.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contactus.css";
function Contactus() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="contactus-section">
      <h1 className="contact-title">Become a crypto trader in seconds</h1>
      <p className="contact-paragraph">
        Anytime, Anywhere. Trade crypto on your terms
      </p>
      <div data-aos="fade-up" className="contact-cards">
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
      <div className="bottom-button">
        <a className="button-contactus" href="">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Contactus;
