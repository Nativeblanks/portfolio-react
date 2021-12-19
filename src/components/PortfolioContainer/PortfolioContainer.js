import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

function PortfolioContatiner() {
    const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Contact':
          return <Contact />;
        case 'Portfolio':
          return <Portfolio />;
        default:
          return <Home />;
      }
    };
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>{renderPage(currentPage)}</div>
      </div>
    );
  }
  
  export default PortfolioContatiner;