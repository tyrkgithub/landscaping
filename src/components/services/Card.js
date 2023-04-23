import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h4 className="card-title">{props.title}</h4>
      <img className="serviceImage" src={props.imgsrc}></img>
        <p className="card-text">{props.p}</p>
      
    </div>
  );
};

export default Card;
