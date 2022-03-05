import React from 'react';
// import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ poetryCount }) => {
  // const title = 'Поезия за твоята душа';

  return (
    <div className='App'>
      {/* <Header title={title} /> */}
      <Navbar />
      <Outlet />
      <Footer poetryCount={poetryCount} />
    </div>
  );
};

export default Layout;
