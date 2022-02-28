import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';

const PoetryCard = ({ poetry, handleClick }) => {
  return (
    <div>
      <Card className='poetry-card' onClick={() => handleClick(poetry.id)}>
        <Card.Body>
          <Card.Title>
            {poetry.front ? (
              <span>
                <GiNotebook />
              </span>
            ) : (
              <span>
                <FaRegHeart className='heart-icon' />
              </span>
            )}
            {poetry.title}
          </Card.Title>
          {poetry.front ? (
            <Card.Text>
              <p className='card-text'>{poetry.content}</p>
            </Card.Text>
          ) : (
            <div className='card-image-section'>
              <Card.Img className='card-image' variant='top' src={poetry.img} />
              <blockquote className='blockquote mb-0'>
                <p className='joke-text'> {poetry.joke} </p>
                <footer id='quote-text' className='blockquote-footer'>
                  Someone famous in <cite title='Source Title'>Unknown</cite>
                </footer>
              </blockquote>
            </div>
          )}
        </Card.Body>
        <Card.Footer className='text-muted text-center'>
          {format(poetry.date, 'yyy-MM-dd')}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PoetryCard;
