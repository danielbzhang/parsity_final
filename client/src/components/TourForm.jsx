import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { addTournament, getTournaments } from '../actions';

const TourForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  const onSubmit = (data) => {
    dispatch(addTournament(data));
    dispatch(getTournaments());
  };

  return (
    <>
      <div className='tour-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel
            controlId='floatingTitle'
            label='Title:'
            className='mb-2'
          >
            <Form.Control
              type='text'
              name='title'
              placeholder='OSU'
              {...register('title', { required: true })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingDate'
            label='Date: (month/day/year)'
            className='mb-2'
          >
            <Form.Control
              type='text'
              name='hostDate'
              placeholder='OSU'
              {...register('hostDate')}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingLocation'
            label='Location:'
            className='mb-2'
          >
            <Form.Control
              type='text'
              name='hostLocation'
              placeholder='OSU'
              {...register('hostLocation')}
            />
          </FloatingLabel>

          <button
            className='btn btn-outline-primary tour-form-submit'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TourForm;
