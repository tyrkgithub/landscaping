// importing various folders/libraries to use here
import React, {Component} from "react";
import "./bAndA.css";
import Before3 from "../../assets/before9.png";
import After3 from "../../assets/after9.png";


class BAndA3 extends Component {
  render() {
  return (
    <div className="wrapper">
    <section className="grid">
     
      <div className="gridArea">
        <div className="before"
        style={{ backgroundImage: `url(${Before3})` }}>
          <p className="textBefore">Before</p>
          <p className="textWord">Beautiful</p>
        </div>
   
        <div className="after"
        style={{ backgroundImage: `url(${After3})` }}>
       <p className="textAfter">After</p>
        </div>
      </div>

    </section>
    </div>
  );
}
}

export default BAndA3;
