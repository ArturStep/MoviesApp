import { TOGGLE_IS_FETCHING, MOVIES, NOT_FOUND } from '../../constans/actionsTypes';

const initialState = {
  movies: [],
  meta: { page: 0, totalPage: 0 },
  isFetching: false,
  notFound: false,
};
const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES: {
      return {
        ...state,
        movies: action.movies.results,
        meta: { page: action.movies.page, totalPage: action.movies.total_pages },
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case NOT_FOUND: {
      return {
        ...state,
        notFound: action.notFound,
      };
    }
    default:
      return state;
  }
};

export default movies;
