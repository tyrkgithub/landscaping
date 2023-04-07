// importing various folders/libraries to use here
import React from "react";
import "./belowHero.css";

//function that creates a hero element for the App
function BelowHero() {
  return (
    <div>
    <div className="belowHero text-center">
      <h2 className="belowHero h2">Design. Transform. Enjoy. Distinctive landscaping at its finest.</h2>
    </div>
    <div className="belowBelow">
      <h3 className="belowLocation">
       Locations
      </h3>
      <div className="locationUlDiv">
        <ul className="loactionUl">
        <li className="location">
            Bromsgrove
          </li>
          <li className="location">
            Redditch
          </li>
       
          <li className="location">
            Rubery
          </li>
         
          <li className="location">
            Droitwich
            </li>
          <li className="location">
          Halesowen
          </li>
          
        </ul>
        
      </div>

    </div>
    </div>
    
  );
}

//exports the file to be used elsewhere
export default BelowHero;
