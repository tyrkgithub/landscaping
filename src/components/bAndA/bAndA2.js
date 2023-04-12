// importing various folders/libraries to use here
import React, {Component} from "react";
import "./bAndA.css";
import Before2 from "../../assets/before7.png";
import After2 from "../../assets/after7.png";


class BAndA2 extends Component {
  render() {
  return (
    <div className="wrapper">
    <section className="grid">
     
      <div className="gridArea">
        <div className="before"
        style={{ backgroundImage: `url(${Before2})` }}>
          <p className="textBefore">Before</p>
          <p className="textWord">Unique</p>
        </div>
   
        <div className="after"
        style={{ backgroundImage: `url(${After2})` }}>
       <p className="textAfter">After</p>
        </div>
      </div>

    </section>
    </div>
  );
}
}

export default BAndA2;
