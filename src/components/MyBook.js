import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const MyBook = () => {
  return (
    <HTMLFlipBook width={200} height={300}>
      <div className='demoPage'>Page 1</div>
      <div className='demoPage'>Page 2</div>
      <div className='demoPage'>Page 3</div>
      <div className='demoPage'>Page 4</div>
    </HTMLFlipBook>
  );
};

export default MyBook;
