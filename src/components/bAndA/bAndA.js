// importing various folders/libraries to use here
import React, {Component} from "react";
import "./bAndA.css";
import Before1 from "../../assets/before1.png";
import After1 from "../../assets/after1.png";


class BAndA extends Component {
  render() {
  return (
    <section className="grid">
     
      <div className="gridArea">
        <div className="before"
        style={{ backgroundImage: `url(${Before1})` }}>
          <p className="textBefore">Before</p>
          <p className="textWord"> Design</p>
        </div>
   
        <div className="after"
        style={{ backgroundImage: `url(${After1})` }}>
       <p className="textAfter">After</p>
        </div>
      </div>

    </section>
  );
}
}

export default BAndA;
