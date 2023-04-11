// importing various folders/libraries to use here
import React from "react";
import "./aboveFooter.css";
import { Link } from "react-router-dom";

//function that creates a hero element for the App
function AboveFooter() {
  return (
    <div className="aboveFooter">
      <h4>GET IN TOUCH</h4>
      <Link className="number" to="tel:07985922312">07985922312</Link>
      <p>Call today for your FREE quote - No hassle. No obligations. No Fuss. </p>
    </div>
  );
}

//exports the file to be used elsewhere
export default AboveFooter;
