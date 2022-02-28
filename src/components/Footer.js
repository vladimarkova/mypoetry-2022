import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = ({ poetryCount }) => {
  return (
    <div>
      <Navbar className='py-0' fixed='bottom' bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand>Поезия за твоята душа {poetryCount}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
