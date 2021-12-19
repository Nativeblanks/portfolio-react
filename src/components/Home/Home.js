import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import NoteTaker from '../Images/NoteTaker.gif'
import TechBlog from '../Images/tech-blog.png'



export default function Home() {
  return (

    <div style={{ display: 'flexbox', width: 700, padding: 30 }}>
          <h4>Check out my Projects</h4>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 noteTaker"
            src={NoteTaker}
            alt="Note Taker app"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 imageTest"
            src={TechBlog}
            alt="Tech Blog"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

