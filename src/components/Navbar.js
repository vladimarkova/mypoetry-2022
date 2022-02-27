import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const MPNavbar = () => {
  return (
    <>
      <Navbar sticky='top' bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand>
            <img
              alt=''
              src='/poetry.jpg'
              width='30'
              height='30'
              className='d-inline-block align-top'
              id='mypoetry-logo'
            />{' '}
            My Poetry
          </Navbar.Brand>
          <Nav className='container-fluid'>
            <Nav.Link to='/'>Стихове</Nav.Link>
            <Nav.Link to='/poetry'>Добави</Nav.Link>
            <Nav.Link className='ms-auto' to='/about'>
              Информация
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MPNavbar;
