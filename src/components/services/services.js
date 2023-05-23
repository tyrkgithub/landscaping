import React from "react";
import "./services.css";
import viewGalleryImg from "../../assets/slabbing1.png"
import { NavLink } from "react-router-dom";


//function that creates a hero element for the App
function Services() {
  return (
    <main className="main">
      <section className="services-grid">
        <div className="services-gridArea">
          <div className="services">
            <h1 className="services-h1">Chris Yorke Landscaping</h1>
            <p classname="services-p">
              Are you planning your new landscaping project? Well, look no
              further as Chris has over 30 years of experience and want to help
              you develop your outdoor space. Chris designs as well as builds to
              the highest of standards and is able to deliver a wide range of
              services.
            </p>
           
          </div>

          <aside className="services-aside">
            <ul className="services-ul">
              <li>Paving</li>
              <li>Driveways</li>
              <li>Fencing</li>
              <li>Patios</li>
              <li>Decking</li>
              <li>Slabbing</li>
              <li>Shed Builds</li>
              <li>Turfing</li>
              <li>Aftifical Grass</li>
              <li>Brick Walls</li>
              <li>Steps</li>
              <li>Planting</li>
              <li>Stump Removal</li>
              <li>Gates</li>
            </ul>
          </aside>

          <div className="viewGallery"
          style={{ backgroundImage: `url(${viewGalleryImg})` }}>
            <h3 className="viewGallery-h3">Previous Projects</h3>
            <p className="viewGallery-p">Check out some of Chris' latest creations over on the gallery page.</p>
            <NavLink
              to="/gallery"
              className="viewGalleryButton"
            >
              View Images
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

//exports the file to be used elsewhere
export default Services;
