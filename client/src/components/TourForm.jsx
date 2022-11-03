import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { addTournament, getTournaments } from '../actions';

const TourForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [isSubmmited, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // console.log('onSubmit fired');
    dispatch(addTournament(data));
    setIsSubmitted((current) => !current);
    // dispatch(getTournaments());
  };

  useEffect(() => {
    // console.log('useEffect called in TourForm');
    dispatch(getTournaments());
  }, [isSubmmited]);

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
