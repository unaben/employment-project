import React from "react";
import "../CSS/mainHeader.css";
import img from "../image/google (2).png";
import figmaLogo from "../image/figma (1).png";

export default function MainHeader() {
  return (
    <div className="main-header-holder">
      <div className="main-header-logo">
        <img src={figmaLogo} alt="figma-logo" />
      </div>
      <p className="main-header-text">
        <span>Welcome to Figma!</span>Create an account to edit and collaborate
        on this file.
      </p>
      <button className="btn-text two-column-grid">
        <div>
          <img src={img} alt="google-icon" height={20} />
        </div>
        Continue with Google
      </button>
      <button className="btn-signup">Sign up with email</button>
    </div>
  );
}
