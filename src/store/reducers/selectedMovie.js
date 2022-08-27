import { SELECTED_MOVIE } from '../../constans/actionsTypes';

const initialState = {
  selectedMovie: null,
};
// eslint-disable-next-line default-param-last
const selectedMovie = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.selectedMovie,
      };
    }
    default:
      return state;
  }
};

export default selectedMovie;
