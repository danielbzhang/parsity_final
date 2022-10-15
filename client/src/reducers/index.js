import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tourReducer from './tourReducer';
import tourOneReducer from './tourOneReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tour: tourReducer,
  tourOne: tourOneReducer,
});

export default rootReducer;
