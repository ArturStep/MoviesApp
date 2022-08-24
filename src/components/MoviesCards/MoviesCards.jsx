import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useRef } from 'react';
import { animateScroll } from 'react-scroll';

import { getMovieTrailer, getSelectedMovie } from '../../store/actions/selectedMovie';

import MovieGenres from '../MovieGenres/MovieGenres';
import MovieListPage from '../MoviesListPage/MovieListPage';
import { BASE_IMAGE_URL } from '../../constans/baseImageUrl';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import no_poster from '../../assets/img/no_poster.jpg';

import s from './MoviesCards.module.css';

function MoviesCards({
  arrow,
  setArrow,
  arrowTop,
  setArrowTop,
}) {
  const movies = useSelector(({ movies }) => movies.movies);

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
                src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : no_poster}
                alt="no img poster"

              />
              {item.overview ? (
                <div className={s.poster_content}>
                  <p>{item.overview}</p>
                  <button
                    className={s.poster_btn}
                    onClick={() => onClickToSelectMovie(item)}
                  >
                    View more
                  </button>
                </div>
              ) : null}
            </div>
            <div>
              <MovieGenres genresId={item.genre_ids} />
            </div>
            <div className={s.content}>
              <h5 className={s.title}>{item.title}</h5>
              <div className={s.rate}>{item.vote_average}</div>
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
