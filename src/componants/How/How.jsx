import React, { Component, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./How.css";

import data from "../data/How.json";

function How() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="howitwork">
      <h1 className="title">How it Work</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eos
        doloribus, maxime mollitia magnam, iure pariatur libero repellat ipsa
        nihil adipisci ab impedit maiores quia aliquid veniam enim sit
        consequatur!
      </p>
      <div   className="cards">
        {data.map((item, i) => (
          <div data-aos="fade-up" className="cardfor">
            <img src={item.image} />
            <div className="contenthow">
              <h4>{item.step} </h4>
              <h3>{item.title} </h3>
              <p>{item.paragraph} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default How;
