import React from 'react';
import PoetryCards from './PoetryCards';

const Home = ({
  poetries,
  handleClick,
  handleNextPage,
  handlePrevPage,
  showLeftArrow,
  showRightArrow
}) => {
  return (
    <div>
      <PoetryCards
        poetries={poetries}
        handleClick={handleClick}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        showLeftArrow={showLeftArrow}
        showRightArrow={showRightArrow}
      />
    </div>
  );
};

export default Home;
