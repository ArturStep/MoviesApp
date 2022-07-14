import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useLocation} from 'react-router';
import classNames from "classnames";
import {animateScroll} from 'react-scroll';
import {BsArrowDownCircleFill} from "react-icons/bs";

import {getGenresId, getMovies, getSearchMovie} from '../../store/actions/movies';
import {getSelectedMovie} from '../../store/actions/selectedMovie';

import {BASE_IMAGE_URL} from '../../constans/baseImageUrl';

import no_poster from '../../assets/img/no_poster.jpg'

import MovieGenres from '../MovieGenres/MovieGenres';
import MovieListPage from "../MoviesListPage/MovieListPage";
import {moviePathname} from "../../constans/moviePathname";

import s from './MoviesList.module.css'

const MoviesList = () => {
  const dispatch = useDispatch()

  const movieRoutes = useLocation()
  const params = useParams()
  const [searchParams] = useSearchParams()

  useEffect(() => {
      const {genreId} = params;
      if (genreId) {
        dispatch(getGenresId(genreId))
      } else if (searchParams.get('movie')) {
        dispatch(getSearchMovie(searchParams.get('movie')))
      } else if (searchParams.get('page')) {
        dispatch(getMovies(movieRoutes.pathname, searchParams.get('page')))
      } else if (moviePathname.find(item => item.path === movieRoutes.pathname)) {
        dispatch(getMovies(movieRoutes.pathname, 1))
      } else if (movieRoutes.pathname.includes('/')) {
        dispatch(getMovies('/popular', 1))
      }
      setArrow(false)
    }, [movieRoutes.pathname, searchParams]
  )
  const movies = useSelector(state => state.movies.movies)
  const [arrow, setArrow] = useState(false)
  const [arrowTop, setArrowTop] = useState(false)
  const scrollRef = useRef(null)
  const scrollToTop = () => {
    scrollRef.current = document.body.scrollTop || document.documentElement.scrollTop
    animateScroll.scrollToTop()
    setArrow(true)
  }
  const scrollTo = () => {
    animateScroll.scrollTo(scrollRef.current)
    scrollRef.current = null
  }
  const moviesPath = ['popular', 'top_rated', 'upcoming']
  document.addEventListener('scroll', (e) => {
    if (!!scrollRef.current && (scrollRef.current < document.documentElement.scrollTop)) {
      setArrowTop(true)
    } else if (!!scrollRef.current && (scrollRef.current > document.documentElement.scrollTop)) {
      setArrowTop(false)
    }
  })
  return (
    <div>
      <div className={s.container}>
        {movies.map(item =>
          <div className={s.item} key={item.id}>
            <div className={s.poster}>
              <img className={s.poster_path}
                   src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : no_poster}
                   alt={'no img poster'}/>
              {item.overview ? <div className={s.poster_content}>
                <p>{item.overview}</p>
                <button className={s.poster_btn} onClick={() => {
                  dispatch(getSelectedMovie(item))
                  scrollToTop()
                }}
                >View more
                </button>
              </div> : null}
            </div>
            <div>
              <MovieGenres genresId={item.genre_ids}/>
            </div>
            <div className={s.content}>
              <h5 className={s.title}>{item.title}</h5>
              <div className={s.rate}>{item.vote_average}</div>
            </div>
          </div>
        )}
      </div>
      {moviesPath.includes(movieRoutes.pathname.slice(1)) && <MovieListPage/>}
      {arrow ? <BsArrowDownCircleFill className={classNames(s.arrow, {[s.arrowTop]: arrowTop})} onClick={() => {
        scrollTo()
        setArrow(false)
      }}
      /> : null}
    </div>
  )
}

export default MoviesList;