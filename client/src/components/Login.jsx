import React from 'react';
import { useDispatch } from 'react-redux';
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
        </form>
        <div>
          <Link to='/auth/register'>Create an account</Link>
        </div>
        <div>
          <Link to='/payment'>Donate to our club!</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
