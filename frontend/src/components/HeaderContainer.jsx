import React from "react";
import { Link } from "react-router-dom";

const HeaderContainer = () => {
  return (
    <header className="headerContainer">
      <Link to="/create">Create Card</Link>
      <Link to="/main">Main view</Link>
    </header>
  );
};

export default HeaderContainer;
