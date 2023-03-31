// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/after3.png";
import "./hero.css";

//function that creates a hero element for the App
function Hero() {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}>
      <h1 className="h1">Chris Yorke Landscaping</h1>
      <h2 className="h2">Design. Transform. Enjoy. Distinctive landscaping at its finest.</h2>
    </div>
  );
}

//exports the file to be used elsewhere
export default Hero;
