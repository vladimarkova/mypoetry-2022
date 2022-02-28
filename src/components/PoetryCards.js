import React from 'react';
import PoetryCard from './PoetryCard';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const PoetryCards = ({ poetries, handleClick, handleNextPage }) => {
  return (
    <>
      <div className='poetry-cards'>
        {poetries.map((poetry) => (
          <PoetryCard
            key={poetry.id}
            poetry={poetry}
            handleClick={handleClick}
          />
        ))}
        <BsArrowUpRightCircleFill id='next-page-arrow' size={20} onClick={handleNextPage}/>
      </div>   
    </>
  );
};

export default PoetryCards;
