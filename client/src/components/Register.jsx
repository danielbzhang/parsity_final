import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { handleRegister } from '../actions';

const userSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log('handleRegister data: ', data);
    dispatch(
      handleRegister(data, () => {
        navigate('/auth/login');
      })
    );
  };

  return (
    <>
      <div>
        <header>Create an account!</header>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Username:</label>
          <input
            className='form-control'
            name='username'
            {...register('username', { required: true })}
            type='text'
          />
          {errors.username?.message}
        </div>

        <div className='form-group'>
          <label>Password:</label>
          <input
            className='form-control'
            name='password'
            {...register('password', { required: true })}
            type='password'
          />
          {errors.password?.message}
        </div>

        <button className='btn btn-primary' type='submit'>
          Create
        </button>
      </form>
      <Link to='/auth/login'>Already have an account</Link>
    </>
  );
};

export default Register;
