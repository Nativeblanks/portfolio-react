import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Props are passed through our functional component.
function Nav(props) {
  const tabs = ['Home', 'About', 'Portfolio', 'Contact'];
  return (
    
    <Container fluid="md">
      <Row>
    <ul className="flex-row">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
     </ul>
     </Row>
    </Container>
  );
}

export default Nav;