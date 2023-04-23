import React, { Component } from "react";
import Card from "./Card";

import servicePic1 from "../../assets/after6.png"
import servicePic2 from "../../assets/after12.png"


class Cards extends Component {
  render() {
    return (
      <div className="gridArea2">
       
          <div className="col-sm-4 fencing" >
            <Card
            
              title="Slabbing"
             imgsrc={servicePic1}
              p="Please visit my gitHub repository to check out some code"
            />
          </div>
          <div className="col-sm-4 turf">
            <Card
            
              title="Turf"
              imgsrc={servicePic2}
              p="Follow me on LinkedIn to keep up with my latest projects"
            />
          </div>
          <div className="col-sm-4 fencing">
            <Card
           
              title="Fencing"
              imgsrc={servicePic1}
              p="You can also email me if you would like to connect"
            />
        
        </div>
      </div>
    );
  }
}

export default Cards;
