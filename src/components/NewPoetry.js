import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MPDatePicker from './MPDatePicker';

const NewPoetry = ({
  handleSubmit,
  newPoetryTitle,
  setNewPoetryTitle,
  newPoetryContent,
  setNewPoetryContent,
  newPoetryImg,
  setNewPoetryImg,
  newPoetryJoke,
  setNewPoetryJoke,
  newPoetryFace,
  setNewPoetryFace,
  setNewPoetryDate
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const setDate = (date) => {
      setNewPoetryDate(date);
  }

  return (
    <div className='input-section'>
      <Form onSubmit={handleSubmit}>
        <div className='form-elements'>
          <div>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Заглавие</Form.Label>
              <Form.Control
                value={newPoetryTitle}
                onChange={(e) => setNewPoetryTitle(e.target.value)}
                type='text'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='content'>
              <Form.Label>Стих</Form.Label>
              <Form.Control
                value={newPoetryContent}
                onChange={(e) => setNewPoetryContent(e.target.value)}
                as='textarea'
                rows={3}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='front-side'>
              <Form.Check
                checked={newPoetryFace}
                onChange={(e) => setNewPoetryFace(e.target.checked)}
                type='checkbox'
                label='Лице'
              />
            </Form.Group>
            <Button variant='success' type='submit'>
              Запиши
            </Button>
          </div>

          <div>
            <Form.Group className='mb-3' controlId='img'>
              <Form.Label>Изображение</Form.Label>
              <Form.Control
                value={newPoetryImg}
                onChange={(e) => setNewPoetryImg(e.target.value)}
                type='text'
                placeholder='Линк към изображението'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='joke'>
              <Form.Label>Виц/Текст</Form.Label>
              <Form.Control
                value={newPoetryJoke}
                onChange={(e) => setNewPoetryJoke(e.target.value)}
                as='textarea'
                rows={3}
              />
            </Form.Group>

            <MPDatePicker startDate={startDate} setStartDate={setStartDate} setDate={setDate}/>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewPoetry;
