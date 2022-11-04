import {
  ADD_TOURNAMENT,
  GET_TOURNAMENTS,
  UPDATE_TOURNAMENT,
  DELETE_TOURNAMENT,
} from '../actions/type';

// const defaultState = [];
const defaultState = {};
const tourReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      // console.log('ADD_TOURNAMENT state::', state);
      // console.log('ADD_TOURNAMENT action.payload::', action.payload);
      // return [action.payload, ...state.tours];
      return {
        tours: [action.payload, ...state.tours],
        toursCount: state.toursCount,
      };
    case GET_TOURNAMENTS:
      return action.payload;
    case UPDATE_TOURNAMENT:
      // console.log('UPDATE_TOURNAMENT state::', state);
      // console.log('UPDATE_TOURNAMENT action.payload::', action.payload);
      // return state.tours.map((tour) =>
      //   tour._id === action.payload._id ? { ...tour, ...action.payload } : tour
      // );
      return {
        tours: state.tours.map((tour) =>
          tour._id === action.payload._id
            ? { ...tour, ...action.payload }
            : tour
        ),
        toursCount: state.toursCount,
      };
    case DELETE_TOURNAMENT:
      // console.log('DELETE_TOURNAMENT state::', state);
      // console.log('DELETE_TOURNAMENT action.payload::', action.payload);
      // return state.tours.filter((tour) => tour._id !== action.payload._id);
      return {
        tours: state.tours.filter((tour) => tour._id !== action.payload._id),
        toursCount: state.toursCount,
      };

    default:
      return state;
  }
};

export default tourReducer;
