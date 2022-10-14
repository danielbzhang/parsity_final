import {
  ADD_TOURNAMENT,
  GET_TOURNAMENTS,
  UPDATE_TOURNAMENT,
  DELETE_TOURNAMENT,
} from '../actions/type';

const defaultState = [];
const tourReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      console.log('state::: ', state);
      console.log('action.payload::: ', action.payload);
      return [action.payload, ...state];
    case GET_TOURNAMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default tourReducer;
