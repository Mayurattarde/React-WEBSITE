import React from "react";
import web from "../src/Images/skills2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

import './index.css';


const Home = () => {
  return (
    <>
    <Common
     name='Upskill your knowledge with Us' 
     imgsrc={web} 
     visit='/service' 
     btname="Get Started"
   />
    </>
  );
  };

export default Home;

