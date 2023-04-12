// importing various folders/libraries to use here
import React, {Component} from "react";
import "./bAndA.css";
import Before1 from "../../assets/before4.png";
import After1 from "../../assets/after4.png";


class BAndA1 extends Component {
  render() {
  return (
    <div className="wrapper">
    <section className="grid">
     
      <div className="gridArea">
        <div className="before"
        style={{ backgroundImage: `url(${Before1})` }}>
          <p className="textBefore">Before</p>
          <p className="textWord">Fresh</p>
        </div>
   
        <div className="after"
        style={{ backgroundImage: `url(${After1})` }}>
       <p className="textAfter">After</p>
        </div>
      </div>

    </section>
    </div>
  );
}
}

export default BAndA1;
