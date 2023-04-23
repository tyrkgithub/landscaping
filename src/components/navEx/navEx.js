// importing various folders/libraries to use here
import React from "react";
import "./navEx.css";
import { Link } from "react-router-dom";

//function that creates a hero element for the App
function NavEx() {
  return (
    <div className="navEx">
      
      <Link className="number" to="tel:07985922312">07985922312</Link>
      </div>
  );
}

//exports the file to be used elsewhere
export default NavEx;
