import { GENRES } from '../../constans/actionsTypes';
import { moviesAPI } from '../../api/api';
import { setNotFound, toggleIsFetching } from './movies';

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
