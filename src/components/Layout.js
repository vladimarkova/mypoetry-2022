import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const title = 'Поезия за твоята душа';

  return (
    <div className='App'>
      <Header title={title} />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
