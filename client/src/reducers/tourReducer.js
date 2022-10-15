import {
  ADD_TOURNAMENT,
  GET_TOURNAMENTS,
  UPDATE_TOURNAMENT,
  DELETE_TOURNAMENT,
  ADD_PLAYER,
  // GET_TOURNAMENT,
} from '../actions/type';

const defaultState = [];
const tourReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      return [action.payload, ...state];
    case GET_TOURNAMENTS:
      return action.payload;
    // case GET_TOURNAMENT:
    //   return action.payload;
    // return state.map((tour) =>
    //   tour._id === action.payload._id ? tour : action.payload
    // );
    case UPDATE_TOURNAMENT:
      return state.map((tour) =>
        tour._id === action.payload._id ? { ...tour, ...action.payload } : tour
      );
    case DELETE_TOURNAMENT:
      return state.filter((tour) => tour._id !== action.payload._id);
    case ADD_PLAYER:
      // console.log('state::: ', state);
      // console.log('action.payload::: ', action.payload.players);
      return action.payload;
    default:
      return state;
  }
};

export default tourReducer;
