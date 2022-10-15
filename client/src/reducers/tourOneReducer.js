import { GET_TOURNAMENT, GET_PLAYERS } from '../actions/type';

const defaultState = [];
const tourOneReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOURNAMENT:
      return action.payload;
    case GET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

export default tourOneReducer;
