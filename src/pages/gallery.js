import React from "react";
import "../pages/pages.css";
import BAndA1 from "../components/bAndA/bAndA1";
import BAndA2 from "../components/bAndA/bAndA2";
import BAndA3 from "../components/bAndA/bAndA3";
import GalleryDiv1 from "../components/gallery/galleryDiv1";
import GalleryDiv2 from "../components/gallery/galleryDiv2";
import GalleryDiv3 from "../components/gallery/galleryDiv3";



// function that creates a body for the homepage including information about what the app is about
function Gallery() {
  return (
    <section className="body-section">
      <div className="wrapper">
      <BAndA1/>
      <GalleryDiv1/>
      <BAndA2/>
      <GalleryDiv2/>
      <BAndA3/>
      <GalleryDiv3/>
      </div>
     
    </section>
  );
}

export default Gallery;