import React, { Component, useEffect } from "react";
import images from "../img/images";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../data/Hero.json";
import "./Hero.css";
function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="content">
        <div className="navbar">
          <h1>CryptoPayment</h1>
        </div>
        <div data-aos="fade-down" className="text">
          Crypto payments is a crypto exchange for everyone
        </div>
        <div className="images">
          {hero.map((item, i) => (
            <div className={item.class}>
              <div className="display">
                <img src={item.backround} />
                <div className="avatar">
                  <img src={item.image} />
                </div>
              </div>
              <h1 className="title">Create your Account</h1>
              <p className="para">
                Easy Set up of your account with <br /> marketplace
                CryptoPayments
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
