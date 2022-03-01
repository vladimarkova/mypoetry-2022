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
        <BsArrowUpRightCircleFill
          className='toggle-page-arrow'
          size={20}
          onClick={handleNextPage}
        />
      </div>
    </>
  );
};

export default PoetryCards;
