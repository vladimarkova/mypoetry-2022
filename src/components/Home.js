import React from 'react';
import PoetryCards from './PoetryCards';

const Home = ({ poetries, handleClick, handleNextPage }) => {
  return (
    <div>
      <PoetryCards
        poetries={poetries}
        handleClick={handleClick}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default Home;
