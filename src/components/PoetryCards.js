import React from 'react';
import PoetryCard from './PoetryCard';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { BsArrowUpLeftCircleFill } from 'react-icons/bs';

const PoetryCards = ({
  poetries,
  handleClick,
  handleNextPage,
  handlePrevPage,
  showLeftArrow,
  showRightArrow,
}) => {
  return (
    <>
      <div className='poetry-cards'>
        {showLeftArrow === true ? (
          <BsArrowUpLeftCircleFill
            className='toggle-page-arrow'
            size={20}
            onClick={handlePrevPage}
          />
        ) : null}
        {poetries.map((poetry) => (
          <PoetryCard
            key={poetry.id}
            poetry={poetry}
            handleClick={handleClick}
          />
        ))}
        {showRightArrow === true ? (
          <BsArrowUpRightCircleFill
            className='toggle-page-arrow'
            size={20}
            onClick={handleNextPage}
          />
        ) : null}
      </div>
    </>
  );
};

export default PoetryCards;
