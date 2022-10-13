import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './type';

const ROOT_URL = 'http://localhost:8000';

export const handleLogin = (userData, callback) => (dispatch) => {
  axios
    .post(`${ROOT_URL}/auth/login`, userData)
    .then(function (response) {
      dispatch({ type: AUTH_USER, payload: response.data });
      localStorage.setItem('token', response.data.token);
      callback();
    })
    .catch(function (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    });
};

export const handleRegister = (userData, callback) => (dispatch) => {
  axios
    .post(`${ROOT_URL}/auth/register`, userData)
    .then(function (response) {
      dispatch({ type: AUTH_USER, payload: response.data });
      localStorage.setItem('token', response.data.token);
      callback();
    })
    .catch(function (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    });
};

export const handleLogout = (callback) => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: AUTH_USER, payload: '' });
  callback();
};
