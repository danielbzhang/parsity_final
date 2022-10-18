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
      return [action.payload, ...state];
    case GET_TOURNAMENTS:
      return action.payload;
    case UPDATE_TOURNAMENT:
      return state.map((tour) =>
        tour._id === action.payload._id ? { ...tour, ...action.payload } : tour
      );
    case DELETE_TOURNAMENT:
      return state.filter((tour) => tour._id !== action.payload._id);

    default:
      return state;
  }
};

export default tourReducer;
