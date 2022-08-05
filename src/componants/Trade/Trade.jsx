import React, { Component } from "react";
import image from "../img/trade.png";
import Apple from "../img/apple.png";
import Google from "../img/google.png";
import Mac from "../img/mac.png";
import "./Trade.css";

function Trade() {
  return (
    <div className="trade-section">
      <div className="trade">
        <div className="tradecontent">
          <h1>Trade Anywhere</h1>
          <p>Anytime, Anywhere. Trade crypto on your terms</p>
          <div className="download">
            <img src={Apple} />
            <div className="downloadt">
              <span>Download from</span>
              <p>Apple Store</p>
            </div>
          </div>
          <div className="download">
            <img src={Google} />
            <div className="downloadt">
              <span>Download from</span>
              <p>Google Play</p>
            </div>
          </div>
          <div className="download">
            <img src={Mac} />
            <div className="downloadt">
              <span>Download from</span>
              <p>Mac OS</p>
            </div>
          </div>
        </div>
        <div className="tradeimg">
          <img src={image} />
        </div>
      </div>
      <div className="trade-mobile">
        <h1>Trade Anywhere</h1>
        <p>Anytime, Anywhere. Trade crypto on your terms</p>
        <div className="tradeimg">
          <img src={image} />
        </div>
        <div className="download">
          <img src={Apple} />
          <div className="downloadt">
            <span>Download from</span>
            <p>Apple Store</p>
          </div>
        </div>
        <div className="download">
          <img src={Google} />
          <div className="downloadt">
            <span>Download from</span>
            <p>Google Play</p>
          </div>
        </div>
        <div className="download">
          <img src={Mac} />
          <div className="downloadt">
            <span>Download from</span>
            <p>Mac OS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
