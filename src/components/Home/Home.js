import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import TechBlog from "../Images/tech-blog.png"
import PasswordGen from "../Images/password-gen.png"
import NoteTaker from "../Images/NoteTaker.gif"
import jsquiz from "../Images/jsquiz.png"
import pizzaMaker from "../Images/pizza-maker.gif"
import Budget from "../Images/Budget-Tracker.gif"




export default function Home() {
  return (

    <div style={{ display: 'flexbox', width: 700, padding: 30 }}>
          <h4>Check out my projects</h4>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 noteTaker"
            src={NoteTaker}
            alt="Note Taker app"
          />
          <Carousel.Caption>
            <h3>The Note Taker app</h3>
            <p>Accessing and updating database functionality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={TechBlog}
            alt="Tech Blog"
          />
          <Carousel.Caption>
            <h3>Tech Blog</h3>
            <p>Database with handlebars and express</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={PasswordGen}
            alt="Password Gen"
          />
          <Carousel.Caption>
            <h3>Password Generator</h3>
            <p>JavaScript powered random passwords</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={pizzaMaker}
            alt="Pizza Time"
          />
          <Carousel.Caption>
            <h3>Build your own pizza</h3>
            <p>Tech used</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={jsquiz}
            alt="JavaScript Quiz"
          />
          <Carousel.Caption>
            <h3>JavaScript quiz</h3>
            <p>Tech used</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Budget}
            alt="Buget tracker"
          />
          <Carousel.Caption>
            <h3>Budget tracker</h3>
            <p>Track your budget with offline service workers</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

