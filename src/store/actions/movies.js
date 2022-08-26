import { MOVIES, NOT_FOUND, TOGGLE_IS_FETCHING } from '../../constans/actionsTypes';
import moviesAPI from '../../api/api';

export const setMovies = (movies) => ({ type: MOVIES, movies });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setNotFound = (notFound) => ({ type: NOT_FOUND, notFound });

export const getMovies = (moviesPath, page) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setNotFound(false));

  moviesAPI.getMovies(moviesPath, page)
    .then((results) => {
      dispatch(setMovies(results));
      dispatch(toggleIsFetching(false));
    });
};

export const getGenreById = (genres) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setNotFound(false));

  moviesAPI.getGenresById(genres)
    .then((results) => {
      dispatch(setMovies(results));
      dispatch(toggleIsFetching(false));
    });
};

export const getSearchMovie = (searchKey) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setNotFound(false));

  moviesAPI.getSearchMovie(searchKey)
    .then((results) => {
      // eslint-disable-next-line no-unused-expressions
      !results.results.length ? dispatch(setNotFound(true))
        : dispatch(setMovies(results));
      dispatch(toggleIsFetching(false));
    });
};
