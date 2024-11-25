import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={"/"}>
          <h1 className="text-2xl text-red-600">Redux Shop</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
