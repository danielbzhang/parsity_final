import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  ADD_TOURNAMENT,
  GET_TOURNAMENTS,
  UPDATE_TOURNAMENT,
  DELETE_TOURNAMENT,
  ADD_PLAYER,
  GET_PLAYERS,
} from './type';

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

export const addTournament = (tourData) => (dispatch) => {
  axios
    .post(`${ROOT_URL}/api/tours`, tourData)
    .then(function (response) {
      dispatch({ type: ADD_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in addTournament', error);
    });
};

export const getTournaments = () => (dispatch) => {
  axios
    .get(`${ROOT_URL}/api/tours`)
    .then(function (response) {
      dispatch({ type: GET_TOURNAMENTS, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in getTournaments', error);
    });
};

export const updateTournament = (tourID, tourData) => (dispatch) => {
  axios
    .put(`${ROOT_URL}/tours/${tourID}`, tourData)
    .then(function (response) {
      dispatch({ type: UPDATE_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in updateTournament', error);
    });
};
export const deleteTournament = (tourID) => (dispatch) => {
  axios
    .delete(`${ROOT_URL}/tours/${tourID}`)
    .then(function (response) {
      dispatch({ type: DELETE_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in deleteTournament', error);
    });
};

export const addPlayer = (playerData, tourID) => (dispatch) => {
  axios
    .post(`${ROOT_URL}/tours/${tourID}/player`, playerData)
    .then(function (response) {
      dispatch({ type: ADD_PLAYER, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in addPlayer', error);
    });
};

export const getPlayers = (tourID) => (dispatch) => {
  axios
    .get(`${ROOT_URL}/tours/${tourID}/player`)
    .then(function (response) {
      dispatch({ type: GET_PLAYERS, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in getPlayers', error);
    });
};
