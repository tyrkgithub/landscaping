// importing various folders/libraries to use here
import React from "react";
import "./aboveFooter.css";
import { Link } from "react-router-dom";

//function that creates a hero element for the App
function AboveFooter() {
  return (
    <div className="aboveFooter">
      <h4 className="aboveFooter h4">Call Today</h4>
      <Link to="tel:07985922312">07985922312</Link>
      
    </div>
  );
}

//exports the file to be used elsewhere
export default AboveFooter;
