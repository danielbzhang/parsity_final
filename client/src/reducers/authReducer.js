import { AUTH_USER, AUTH_ERROR } from '../actions/type';

const defaultState = {
  authenticated: localStorage.getItem('token') || '',
  errorMessage: '',
  username: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
        username: action.payload.username || null,
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
