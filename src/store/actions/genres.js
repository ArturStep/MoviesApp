import { GENRES } from '../../constans/actionsTypes';
import { setNotFound, toggleIsFetching } from './movies';
import moviesAPI from '../../api/api';

export const setGenres = (genres) => ({ type: GENRES, genres });

export const getGenres = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setNotFound(false));

  moviesAPI.getGenres()
    .then((results) => {
      dispatch(setGenres(results));
      dispatch(toggleIsFetching(false));
    });
};
