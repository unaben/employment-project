import React from "react";
import "../CSS/header.css";
import arror from "../image/down-arrow (1).png";
import figma from "../image/figma.png";
import angle from "../image/right-arrow (1).png";
import hand from "../image/hand.png"

export default function Header() {
  return (
    <div className="main-header-container">
      <ul className="grid-container">
        <div className="two-column-grid">
          <div className="logo-container">
            <li className="figma-logo-container">
              <div className="figma-logo">
                <img
                  src={figma}
                  alt="figma-img"
                  width={32}
                  height={32}
                  style={{ background: "#2c2c2c", leftMargin: "10px" }}
                />
              </div>
              <img
                src={arror}
                alt="arror-img"
                style={{ background: "white" }}
              />
            </li>
          </div>
          <li className="image box"><img src={hand} alt="hand-logo" /></li>
        </div>
        <li className="middle-header-text ">
          <p>
            <span>Other / </span>FE/UX Test
          </p>
        </li>
        <div className="four-grid-template-columns">
          <li>
            <p className="last-header-text">A</p>
          </li>
          <button>Log in</button>
          <li className="end-section">
            <img src={angle} alt="angle-img" style={{ background: "white" }} />
          </li>
          <li>
            <p className="end-section">
              47%
              <img
                src={arror}
                alt="arror-img"
                style={{ background: "white" }}
              />
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
}
