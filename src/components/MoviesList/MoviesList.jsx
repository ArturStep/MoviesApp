import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';

import { getGenreById, getMovies, getSearchMovie } from '../../store/actions/movies';

import MoviesCards from '../MoviesCards/MoviesCards';
import Preloader from '../Preloader/Preloader';

const useGetMovies = (movieRoutes, dispatch, setArrow) => {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { genreId } = params;
    if (genreId) {
      dispatch(getGenreById(genreId));
      return;
    }
    if (searchParams.get('movie')) {
      dispatch(getSearchMovie(searchParams.get('movie')));
      return;
    }

    const page = searchParams.get('page') || setSearchParams({ page: 1 });

    dispatch(getMovies(movieRoutes.pathname, page));
    setArrow(false);
  }, [movieRoutes.pathname, searchParams]);
};

function MoviesList() {
  const [arrow, setArrow] = useState(false);

  const [arrowTop, setArrowTop] = useState(false);

  const isFetching = useSelector(({ movies }) => movies.isFetching);

  const dispatch = useDispatch();

  const movieRoutes = useLocation();

  useGetMovies(movieRoutes, dispatch, setArrow);

  return (
    <>
      {isFetching ? <Preloader /> : (
        <MoviesCards
          arrow={arrow}
          setArrow={setArrow}
          arrowTop={arrowTop}
          setArrowTop={setArrowTop}
        />
      )}
    </>
  );
}

export default MoviesList;
