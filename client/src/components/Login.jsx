import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { handleLogin } from '../actions';
import '../css/login.css';

const userSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticated = useSelector(
    (state) => state.rootReducer.auth.errorMessage
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    dispatch(
      handleLogin(data, () => {
        navigate('/api/main');
      })
    );
  };

  return (
    <>
      <div className='login-title'>
        <h3 className='title'>
          <span className='osu'>B</span>rackets
        </h3>
        <h6 className='subtitle'>
          Designed for <span className='osu'>Oregon State University</span>{' '}
          Badminton Club
        </h6>
      </div>
      <div className='login-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <div>
              <label>Username:</label>
            </div>
            <input
              className='form-control login-label-input'
              name='username'
              {...register('username', { required: true })}
              type='text'
            />
            <div style={{ color: 'red' }}>{errors.username?.message}</div>
          </div>

          <div className='form-group'>
            <div>
              <label>Password:</label>
            </div>
            <input
              className='form-control login-label-input'
              name='password'
              {...register('password', { required: true })}
              type='password'
            />
            <div style={{ color: 'red' }}>{errors.password?.message}</div>
          </div>

          <button className='btn btn-primary login-label-btn' type='submit'>
            Login
          </button>
          <div style={{ color: 'red' }}>
            {authenticated
              ? 'Log in failed. Please check your username or password'
              : ''}
          </div>
        </form>
        <div>
          <Link to='/auth/register'>Create an account / Accept a donation</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
