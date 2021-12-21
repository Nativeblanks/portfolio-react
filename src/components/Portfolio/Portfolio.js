import React from "react";

import TechBlog from "../Images/tech-blog.png"
import PasswordGen from "../Images/password-gen.png"
import NoteTaker from "../Images/NoteTaker.gif"
import jsquiz from "../Images/jsquiz.png"
import pizzaMaker from "../Images/pizza-maker.gif"
import Budget from "../Images/Budget-Tracker.gif"
import Card from 'react-bootstrap/Card'



const Portfolio = () => (
    <div>
      <div className="portfolio-h1">Check out My Projects</div>
      <Card>
      <Card.Img 
        className="card-size"
        src= {TechBlog} />
      </Card>
      <Card>
      <Card.Img 
        className="card-size xs"
        src= {PasswordGen}
        alt = 'PasswordGen' />
      </Card>
      <Card>
      <Card.Img  
        className="card-size"
        src= {NoteTaker}
        alt = 'noteTaker' />
      </Card>
      <Card>
      <Card.Img  
        className="card-size"
        src= {jsquiz} 
        alt = 'quiz' />
      </Card>
      <Card>
      <Card.Img 
        className="card-size "
        src= {pizzaMaker} 
        alt = 'pizzamaker' />
      </Card>
      <Card>
      <Card.Img 
        className="card-size"
        src= {Budget} 
          alt = 'Budget' />
      </Card>
    </div>
  );

export default Portfolio