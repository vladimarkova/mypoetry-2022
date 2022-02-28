import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

const PoetryCard = ({ poetry }) => {
  return (
    <div>
      <Card className='poetry-card'>
        <Card.Body>
          <Card.Title>
            <span>
              <GiNotebook />
            </span>
            {poetry.title}
          </Card.Title>
          <Card.Text>
            <p className='card-text'>{poetry.content}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted text-center'>
          {format(poetry.date, 'yyy-MM-dd')}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PoetryCard;
