import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { addPlayer } from '../actions';

const PlayerList = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();

  const tourId = useSelector((state) => state.rootReducer.tourOne._id);

  const onSubmit = (data) => {
    console.log('tourIDDDDDDD:', tourId);
    dispatch(addPlayer(data, tourId));
  };

  return (
    <>
      <form className='playerlist' onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel
          controlId='floatingFirstname'
          label='First Name:'
          className='mb-2'
        >
          <Form.Control
            type='text'
            name='firstname'
            placeholder='OSU'
            {...register('firstname')}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingLastname'
          label='Last Name:'
          className='mb-2'
        >
          <Form.Control
            type='text'
            name='lastname'
            placeholder='OSU'
            {...register('lastname')}
          />
        </FloatingLabel>
        <FloatingLabel controlId='floatingSelect' label='Select a Gender'>
          <Form.Select
            aria-label='Floating label select example'
            name='sex'
            {...register('sex')}
          >
            <option value='m'>Male</option>
            <option value='f'>Female</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingPhone'
          label='Phone Number:'
          className='mb-2'
        >
          <Form.Control
            type='text'
            name='phone'
            placeholder='OSU'
            {...register('phone')}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingEmail'
          label='Email Address:'
          className='mb-2'
        >
          <Form.Control
            type='text'
            name='email'
            placeholder='OSU'
            {...register('email')}
          />
        </FloatingLabel>

        <button className='btn btn-outline-primary' type='submit'>
          Add Player
        </button>
      </form>
      <Link to='/tours/:id/allplayers'>All Players List</Link>
    </>
  );
};

export default PlayerList;
