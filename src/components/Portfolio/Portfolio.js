import React from "react";

import TechBlog from "../Images/tech-blog.png"
import PasswordGen from "../Images/password-gen.png"
import NoteTaker from "../Images/NoteTaker.gif"
import jsquiz from "../Images/jsquiz.png"
import pizzaMaker from "../Images/pizza-maker.gif"
import Budget from "../Images/Budget-Tracker.gif"



const Portfolio = () => (
    <div>
      <h1>Portfolio Page</h1>
      <p>
      Tech blog
      <img 
        className="d-block w-100"
        src= {TechBlog} />

      Password Generator
      <img 
        className="d-block w-100"
        src= {PasswordGen} />
      Note Taker
      <img 
        className="d-block w-100"
        src= {NoteTaker} />
      jsquiz
      <img 
        className="d-block w-100"
        src= {jsquiz} />
      pizza maker
      <img 
        className="d-block w-100"
        src= {pizzaMaker} />
      budget tracker
      <img 
        className="d-block w-100"
        src= {Budget} />
      </p>
    </div>
  );

export default Portfolio