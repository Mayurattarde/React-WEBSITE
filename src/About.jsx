import React from "react";
import web from "../src/Images/skills5.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

import './index.css';


const About = () => {
  return (
    <>
   <Common  
   name='Welcome to About Page' 
   imgsrc={web} 
   visit='/contact' 
   btname="Contact Now"/>
    </>
  );
};

export default About;
