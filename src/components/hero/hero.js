// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/after5.png";
import "./hero.css";
import BelowHero from "../belowHero/belowHero";

//function that creates a hero element for the App
function Hero() {
  return (
    <div>
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}>
      <h1 className="h1">Chris Yorke Landscaping</h1>
    </div>
    <BelowHero />
    </div>
  );
}

//exports the file to be used elsewhere
export default Hero;
