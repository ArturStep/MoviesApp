import { GENRES } from '../../constans/actionsTypes';

const initialState = {
  genres: [],
};
// eslint-disable-next-line default-param-last
const genres = (state = initialState, action) => {
  switch (action.type) {
    case GENRES: {
      return {
        ...state,
        genres: action.genres,
      };
    }
    default:
      return state;
  }
};

export default genres;
