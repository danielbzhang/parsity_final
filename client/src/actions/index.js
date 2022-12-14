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
  GET_TOURNAMENT,
  DELETE_TABLE_ROW,
} from './type';

// const ROOT_URL = 'http://localhost:8000'; ${ROOT_URL}

export const handleLogin = (userData, callback) => (dispatch) => {
  axios
    .post(`/auth/login`, userData)
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
    .post(`/auth/register`, userData)
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
  // const token = localStorage.token;
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  axios
    .post(`/api/tours`, tourData, config)
    .then(function (response) {
      dispatch({ type: ADD_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in addTournament', error);
    });
};

export const getTournaments = (pgNumber) => (dispatch) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  axios
    .get(`/api/tours?page=${pgNumber}`, config)
    // .get(`/api/tours`, config)
    .then(function (response) {
      dispatch({ type: GET_TOURNAMENTS, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in getTournaments', error);
    });
};
export const getTournament = (tourID) => (dispatch) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  axios
    .get(`/tours/${tourID}`, config)
    .then(function (response) {
      dispatch({ type: GET_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in getTournament', error);
    });
};
// ++++++++++
export const updateTournament = (tourID, tourData) => (dispatch) => {
  axios
    .put(`/tours/${tourID}`, tourData)
    .then(function (response) {
      dispatch({ type: UPDATE_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in updateTournament', error);
    });
};
export const deleteTournament = (tourID) => (dispatch) => {
  axios
    .delete(`/tours/${tourID}`)
    .then(function (response) {
      dispatch({ type: DELETE_TOURNAMENT, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in deleteTournament', error);
    });
};

export const addPlayer = (playerData, tourID) => (dispatch) => {
  axios
    .post(`/tours/${tourID}/player`, playerData)
    .then(function (response) {
      dispatch({ type: ADD_PLAYER, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in addPlayer', error);
    });
};

export const getPlayers = (tourID) => (dispatch) => {
  axios
    .get(`/tours/${tourID}/player`)
    .then(function (response) {
      dispatch({ type: GET_PLAYERS, payload: response.data });
      // callback();
    })
    .catch(function (error) {
      console.log('error in getPlayers', error);
    });
};

export const deleteTableRow = (tourID, playerID) => (dispatch) => {
  axios
    .delete(`/tours/${tourID}/table/${playerID}`)
    .then(function (response) {
      dispatch({ type: DELETE_TABLE_ROW, payload: response.data });
    })
    .catch(function (error) {
      console.log('error in deleteTableRow', error);
    });
};
