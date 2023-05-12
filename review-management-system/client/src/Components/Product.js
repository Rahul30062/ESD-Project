import React, { useState } from "react";
import "../styles/product.css";
import axios from "axios";

import Laptop from "../images/Laptop.webp";
import Smartphone from "../images/SmartPhone.webp";
import Headphone from "../images/headphone.webp";
import Grinder from "../images/Grinder.webp";
import Hoodie from "../images/Hoodie.png";
import Logo from "../images/logo.png";

export default function Product() {
  const [hide, setHide] = useState(0);
  const [review, setReview] = useState("");
  const Change = () => {
    if (hide) setHide(0);
    else setHide(1);
  };
  const collect = (e) => {
    setReview(e.target.value);
  };
  const handlePress = (e) => {
    if (e.keyCode === "Enter" || e.which === 13) {
      e.preventDefault();
      postData(e);
      setReview("");
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    const res = axios
      .post("http://localhost:8080", {
        review,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <div className="logo">
        <img src={Logo} alt="" />
        <h1 className="logoH">Revue.com</h1>
      </div>
      <div className="electronics">
        <h1 className="elec">Electronics</h1>
        <div className="images">
          <div className="laptop product">
            <h3>Laptop</h3>
            <img
              src={Laptop}
              alt="Laptop"
              className="laptopimg"
              onClick={Change}
            />
            <input
              type="text"
              onChange={(e) => {
                collect(e);
              }}
              onKeyDown={(e) => {
                handlePress(e);
              }}
              value={review}
              className={`${hide ? "" : "hide"}`}
              placeholder="Write your review."
            />
          </div>
          <div className="smartphone product">
            <h3>Mobile Phones</h3>

            <img
              src={Smartphone}
              alt="Laptop"
              className="smartphone"
              //   onClick={Change}
            />
            <input
              type="text"
              className="smartIn"
              placeholder="Write your review."
            />
          </div>
          <div className="headphone product">
            <h3>Earbuds</h3>

            <img
              src={Headphone}
              alt="Laptop"
              className="headphone"
              //   onClick={Change}
            />
            <input
              type="text"
              className="headIn"
              placeholder="Write your review."
            />
          </div>
          <div className="grinder product">
            <h3>Grinder</h3>

            <img
              src={Grinder}
              alt="Laptop"
              className="grinder"
              //   onClick={Change}
            />
            <input
              type="text"
              className="grinderIn"
              placeholder="Write your review."
            />
          </div>
        </div>
      </div>
      <div className="fashion">
        <h1 className="elec">Fashion</h1>
        <div className="images">
          <div className="hoodie product">
            <h3>Jacket</h3>

            <img src={Hoodie} alt="Hoodie" className="hoodieimg" />
            <input type="text" placeholder="Write your review." />
          </div>
          <div className="shirt product">
            <h3>Hoodie</h3>

            <img
              src={Hoodie}
              alt="Shirt"
              className="smartphone"
              //   onClick={Change}
            />
            <input
              type="text"
              className="smartIn"
              placeholder="Write your review."
            />
          </div>
          <div className="Jacket product">
            <h3>Tshirt</h3>
            <img
              src={Hoodie}
              alt="Laptop"
              className="headphone"
              //   onClick={Change}
            />
            <input
              type="text"
              className="headIn"
              placeholder="Write your review."
            />
          </div>
          <div className="grinder product">
            <h3>Shirt</h3>

            <img
              src={Hoodie}
              alt="Laptop"
              className="grinder"
              //   onClick={Change}
            />
            <input
              type="text"
              className="grinderIn"
              placeholder="Write your review."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
