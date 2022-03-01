import React from 'react';
import PoetryCards from './PoetryCards';

const Home = ({
  poetries,
  handleClick,
  handleNextPage,
  handlePrevPage,
  showLeftArrow,
}) => {
  return (
    <div>
      <PoetryCards
        poetries={poetries}
        handleClick={handleClick}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        showLeftArrow={showLeftArrow}
      />
    </div>
  );
};

export default Home;
