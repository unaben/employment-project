import React from "react";
import "../CSS/gridContainer.css";
import phone from "../image/information.png";
import home from "../image/home (2).png";

export default function GridContainer() {
  return (
    <div className="three-column-grid-container">
      <div className="child-container ">
        <h3>Do you love scrabble?</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          velit augue, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec rhoncus velit augue, consectetur adipiscing elit.
        </h4>
      </div>
      <div className="child-container middle-child">
        <div className="grid-auto-flow">
          <div>
            <img src={phone} alt="info-logo" />
          </div>
          <h3>Call us</h3>
        </div>
        <h4 className="left-padding">We are available by phone 9am - 5pm</h4>
        <h3 className="text left-padding">0115 123 4567</h3>
      </div>
      <div className="child-container">
        <div className="grid-auto-flow">
          <div>
            <img src={home} alt="home-logo" />
          </div>
          <h3>Find us</h3>
        </div>
        <h4 className="left-padding">
          123 Fake street, Somepbce, Nottingham, NG1 2TR
        </h4>
        <h3 className="text left-padding ">Open in maps</h3>
      </div>
    </div>
  );
}
