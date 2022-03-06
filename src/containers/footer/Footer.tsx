import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer container d-flex justify-content-center">
      <span>{process.env.REACT_APP_FOOTER}</span>
    </footer>
  );
};

export default Footer;
