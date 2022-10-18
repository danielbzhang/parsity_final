import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { handleRegister } from '../actions';

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'must be at least 5 characters long')
    .required(),
  password: Yup.string()
    .min(3, 'must be at least 5 characters long')
    .required(),
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
    // console.log('handleRegister data: ', data);
    dispatch(
      handleRegister(data, () => {
        navigate('/auth/login');
      })
    );
  };

  return (
    <>
      <div className='login-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label>Username:</label>
            <input
              className='form-control login-label-input'
              name='username'
              {...register('username', { required: true })}
              type='text'
            />
            <div style={{ color: 'red' }}>{errors.username?.message}</div>
          </div>

          <div className='form-group'>
            <label>Password:</label>
            <input
              className='form-control login-label-input'
              name='password'
              {...register('password', { required: true })}
              type='password'
            />
            <div style={{ color: 'red' }}>{errors.password?.message}</div>
          </div>

          <button className='btn btn-primary register-btn' type='submit'>
            Create
          </button>
        </form>
        <div className='register-link'>
          <Link to='/auth/login'>Already have an account</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
