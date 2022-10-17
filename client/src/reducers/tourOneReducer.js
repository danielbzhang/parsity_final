import {
  GET_TOURNAMENT,
  GET_PLAYERS,
  DELETE_TABLE_ROW,
  ADD_PLAYER,
} from '../actions/type';

const defaultState = [];
const tourOneReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOURNAMENT:
      return action.payload;
    case GET_PLAYERS:
      return action.payload;
    case ADD_PLAYER:
      return action.payload;
    case DELETE_TABLE_ROW:
      return action.payload;
    default:
      return state;
  }
};

export default tourOneReducer;
