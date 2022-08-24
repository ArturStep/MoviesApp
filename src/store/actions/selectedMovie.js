import { SELECTED_MOVIE } from '../../constans/actionsTypes';
import { moviesAPI } from '../../api/api';

export const setSelectedMovie = (selectedMovie) => ({ type: SELECTED_MOVIE, selectedMovie });

export const getSelectedMovie = (item) => (dispatch) => {
  dispatch(setSelectedMovie(item));
};

export const getMovieTrailer = (id) => (dispatch) => {
  moviesAPI.getMovieTrailer(id)
    .then((results) => {
      dispatch(setSelectedMovie(results));
    });
};
