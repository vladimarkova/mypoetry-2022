import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsBookmarkCheck } from 'react-icons/bs';

const Footer = ({ poetryCount }) => {
  return (
    <div>
      <Navbar className='py-0' fixed='bottom' bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand>Поезия за твоята душа</Navbar.Brand>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <BsBookmarkCheck style={{ color: 'white' }} />
            <div style={{ color: 'white', fontSize: '20px', marginLeft: '6px' }}>
              {poetryCount}
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
