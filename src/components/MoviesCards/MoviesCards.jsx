import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import React, { useRef } from 'react';
import { animateScroll } from 'react-scroll';

import { getMovieTrailer, getSelectedMovie } from '../../store/actions/selectedMovie';

import MovieGenres from '../MovieGenres/MovieGenres';
import MovieListPage from '../MoviesListPage/MovieListPage';
import { BASE_IMAGE_URL } from '../../constans/baseImageUrl';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import noPoster from '../../assets/img/noPoster.jpg';

import s from './MoviesCards.module.css';

function MoviesCards({
  arrow,
  setArrow,
  arrowTop,
  setArrowTop,
}) {
  // eslint-disable-next-line no-shadow
  const movies = useSelector(({ movies }) => movies.movies);

  // eslint-disable-next-line no-shadow
  const notFound = useSelector(({ movies }) => movies.notFound);

  const dispatch = useDispatch();

  const movieRoutes = useLocation();

  const scrollRef = useRef(null);

  const scrollToTop = () => {
    scrollRef.current = document.body.scrollTop || document.documentElement.scrollTop;
    animateScroll.scrollToTop();
    setArrow(true);
  };

  const moviesPath = ['popular', 'top_rated', 'upcoming'];

  const onClickToSelectMovie = (item) => {
    dispatch(getSelectedMovie(item));
    dispatch(getMovieTrailer(item.id));
    scrollToTop();
  };

  if (notFound) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <div className={s.container}>
        {movies.map((item) => (
          <div className={s.item} key={item.id}>
            <div className={s.poster}>
              <img
                className={s.poster_path}
                src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : noPoster}
                alt=""

              />
              {item.overview ? (
                <div className={s.poster_content}>
                  <p>{item.overview}</p>
                  <button
                    type="button"
                    className={s.poster_btn}
                    onClick={() => onClickToSelectMovie(item)}
                  >
                    View more
                  </button>
                </div>
              ) : null}
            </div>
            <div className={s.bottom_item}>
              <div>
                <MovieGenres genresId={item.genre_ids} />
              </div>
              <div className={s.content}>
                <h5 className={s.title}>{item.title}</h5>
                <div className={s.rate}>{item.vote_average}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {moviesPath.includes(movieRoutes.pathname.slice(1)) && <MovieListPage />}
      <ScrollArrow
        arrow={arrow}
        setArrow={setArrow}
        arrowTop={arrowTop}
        setArrowTop={setArrowTop}
        scrollRef={scrollRef}
      />
    </div>
  );
}

export default MoviesCards;
