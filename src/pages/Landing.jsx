import React from "react";
import "./landing.css";
import Logo from "../assets/logo.png";
import Zing from "../assets/zing.png";
import Thanthi from "../assets/thanthi.png";
import Prime from "../assets/prime.png";
import Login from "../assets/login.png";
import Mx from "../assets/mxplayer.png";
import Shemaro from "../assets/shemaro.png";

export default function Landing() {
  return (
    <>
      <div class="logo-container">
        <div class="logo">
          <img src={Logo} alt="" />
        </div>
        <p className="text">
          <span className="text1">Mountain River Films</span>
          <br />
          Content Delevery Without Pain
        </p>
      </div>
      <p className="myinfo">Content Management Delevery System</p>
      <div class="flex-container">
        <div class="flex-item-left">
          <img src={Thanthi} alt="" />
        </div>
        <div class="flex-item-center">
          <img src={Zing} alt="" />
        </div>
        <div class="flex-item-right">
          <img src={Prime} alt="" />
        </div>
      </div>
      {/* Second column */}
      <div class="flex-container">
        <div class="flex-item-left">
          <img src={Mx} alt="" />
        </div>

        <div class="flex-item-right">
          <img src={Shemaro} alt="" />
        </div>
      </div>
      {/* third column */}
      <div class="flex-container">
        <div class="flex-item-center">
          <img src={Login} alt="" height={200} />
        </div>
      </div>
    </>
  );
}
