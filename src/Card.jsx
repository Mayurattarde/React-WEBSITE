import React from "react";
import web from "../src/Images/Frontend.jpg";
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Front-end development is used for designing the part of a website 
    that a user sees. The front-end developer will turn designs 
    created by a web designer into a functional, aesthetically pleasing user interface.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
        </div>
    </>
  );
};

export default Card;

