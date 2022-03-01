import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MPDatePicker from './MPDatePicker';

const NewPoetry = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='input-section'>
      <Form>
        <div className='form-elements'>
          <div>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Заглавие</Form.Label>
              <Form.Control type='text' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='content'>
              <Form.Label>Стих</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='front-side'>
              <Form.Check type='checkbox' label='Лице' />
            </Form.Group>
            <Button variant='success' type='submit'>
              Запиши
            </Button>
          </div>

          <div>
            <Form.Group className='mb-3' controlId='img'>
              <Form.Label>Изображение</Form.Label>
              <Form.Control type='text' placeholder='Линк към изображението' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='joke'>
              <Form.Label>Виц/Текст</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>

            <MPDatePicker startDate={startDate} setStartDate={setStartDate} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewPoetry;
