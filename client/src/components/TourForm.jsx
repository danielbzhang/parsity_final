import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { useRef } from 'react';

import { addTournament } from '../actions';

const TourForm = () => {
  // const [title, setTitle] = useState('');
  // const dispatch = useDispatch();

  // const onTitleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addTournament(title));

  //   setTitle('');
  // };

  // const onInputChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // return (
  //   <>
  //     <form className='input-bar' onSubmit={onTitleSubmit}>
  //       <input
  //         className='tour-input'
  //         placeholder='Enter a title'
  //         onChange={onInputChange}
  //         value={title}
  //       />
  //     </form>
  //   </>
  // );

  // +++++++++++++++++++++

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log('TourForm data: ', data);
    dispatch(addTournament(data));
  };

  return (
    <>
      <form className='tour-form' onSubmit={handleSubmit(onSubmit)}>
        {/* <div className='form-group'>
          <label>Title:</label>
          <input
            className='form-control'
            name='title'
            {...register('title', { required: true })}
            type='text'
          />
        </div>
        <div className='form-group'>
          <label>Date:</label>
          <input
            className='form-control'
            name='hostDate'
            {...register('hostDate')}
            type='text'
          />
        </div>
        <div className='form-group'>
          <label>Location:</label>
          <input
            className='form-control'
            name='hostLocation'
            {...register('hostLocation')}
            type='text'
          />
        </div> */}
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

        <button className='btn btn-outline-primary' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default TourForm;
