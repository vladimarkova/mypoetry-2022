import React from 'react';
import PoetryCards from './PoetryCards';

const Home = ({ poetries }) => {
  return (
    <div>
      <PoetryCards poetries={poetries} />
    </div>
  );
};

export default Home;
