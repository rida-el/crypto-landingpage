import React, { Component } from "react";
import btc from "../data/Btc.json";
import "./Btc.css";

function Btc() {
  return (
    <div className="section2">
      <div className="firstcard">
        {btc.map((item, i) => (
          <div className={item.class}>
            <img src={item.logo} />
            <div className="tag">
              <h1 className="t1">{item.title}</h1>
              <div className="num">{item.tag}</div>
            </div>
            <h1>{item.priceg}</h1>
            <h3>{item.pricep}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Btc;
