import React from "react";
import "./Header.css";
import HeaderProps from './Header.types';

const Header = () => {

  return (
    <header className="navbar Header">
      <div className="container d-flex">
      <span>{process.env.REACT_APP_TITLE}</span>
      </div>
    </header>
  );
};

export default Header;