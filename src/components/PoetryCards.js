import React from 'react';
import PoetryCard from './PoetryCard';

const PoetryCards = ({ poetries }) => {
  return (
    <div className='poetry-cards'>
      {poetries.map((poetry) => (
        <PoetryCard key={poetry.id} poetry={poetry} />
      ))}
    </div>
  );
};

export default PoetryCards;
