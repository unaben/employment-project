import React from "react";
import "../CSS/header.css";

export default function Header() {
  return (
    <div className="main-header-container">
      <ul className="grid-container">
        <div className="grid-auto-flow">
          <div className="logo-container">
            <li className="">Logo</li>
          </div>
          <li className="image box">Image</li>
        </div>
        <li className="middle-header-text ">
          <p>
            <span>Other / </span>FE/UX Test
          </p>
        </li>
        <div className="five-grid-template-columns">
          <li>
            <p className="last-header-text">A</p>
          </li>
          <button>Log in</button>
          <li>icon</li>
          <li>
            <p className="">47% icon</p>
          </li>
        </div>
      </ul>
    </div>
  );
}
