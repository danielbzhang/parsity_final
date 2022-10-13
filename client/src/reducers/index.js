import { combineReducers } from 'redux';
import authReducer from './authReducer';

const test = () => {
  return 'hello';
};

const rootReducer = combineReducers({
  auth: authReducer, // test: test,
});

export default rootReducer;
