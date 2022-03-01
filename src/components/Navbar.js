import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const MPNavbar = () => {
  return (
    <>
      <Navbar fixed='top' bg='dark' variant='dark'>
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
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'rgb(208, 218, 235)' }}
                to='/'
              >
                Стихове
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'rgb(208, 218, 235)' }}
                to='poetry'
              >
                Добави
              </Link>
            </Nav.Link>
            <Nav.Link className='ms-auto'>
              <Link
                style={{ textDecoration: 'none', color: 'rgb(208, 218, 235)' }}
                to='about'
              >
                Информация
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MPNavbar;
