// importing various folders/libraries to use here
import React, {Component} from "react";
import "./galleryDiv.css";
import Img1 from "../../assets/after10.png";
import Img2 from "../../assets/after1.png";
import Img3 from "../../assets/after3.png";


class GalleryDiv3 extends Component {
  render() {
  return (
    <div className="wrapper">
    <section className="gallery-grid">
     
      <div className="gallery-gridArea">
        <div className="one"
        style={{ backgroundImage: `url(${Img1})` }}>
        </div>
   
        <div className="two"
        style={{ backgroundImage: `url(${Img2})` }}>
        </div>

        <div className="three"
        style={{ backgroundImage: `url(${Img3})` }}>
        </div>
      </div>

    </section>
    </div>
  );
}
}

export default GalleryDiv3;