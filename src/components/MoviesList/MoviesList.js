import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useSearchParams} from "react-router-dom";
import {useLocation} from 'react-router';
import {animateScroll} from 'react-scroll';

import {getGenreById, getMovies, getSearchMovie, isFetching} from '../../store/actions/movies';

import MoviesCards from '../MoviesCards/MoviesCards';
import Preloader from '../Preloader/Preloader';

const useGetMovies = (movieRoutes, dispatch, setArrow) => {
  const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
      const {genreId} = params;
      if (genreId) {
        dispatch(getGenreById(genreId))
        return
      }
      if (searchParams.get('movie')) {
        dispatch(getSearchMovie(searchParams.get('movie')))
        return;
      }

      const page = searchParams.get('page') || setSearchParams({page: 1})

      dispatch(getMovies(movieRoutes.pathname, page))
      setArrow(false)
    }, [movieRoutes.pathname, searchParams]
  )
}

const MoviesList = () => {
  const [arrow, setArrow] = useState(false)

  const [arrowTop, setArrowTop] = useState(false)

  const isFetching = useSelector(({movies}) => movies.isFetching)

  const dispatch = useDispatch()

  const movieRoutes = useLocation()

  const scrollRef = useRef(null)


  // TODO: разбить все на компаненты и выносить логику туда ( желательно использовать кастомные хуки)
  useGetMovies(movieRoutes, dispatch, setArrow)

  const scrollToTop = () => {
    scrollRef.current = document.body.scrollTop || document.documentElement.scrollTop
    animateScroll.scrollToTop()
    setArrow(true)
  }
  const scrollTo = () => {
    animateScroll.scrollTo(scrollRef.current)
    scrollRef.current = null
  }

  document.addEventListener('scroll', (e) => {
    if (!!scrollRef.current && (scrollRef.current < document.documentElement.scrollTop)) {
      setArrowTop(true)
    } else if (!!scrollRef.current && (scrollRef.current > document.documentElement.scrollTop)) {
      setArrowTop(false)
    }
  })
  return (
    <>
      {isFetching ? <Preloader/> : <MoviesCards scrollTo={scrollTo}
                                                scrollToTop={scrollToTop}
                                                arrow={arrow}
                                                setArrow={setArrow}
                                                arrowTop={arrowTop}/>}
    </>
  )
}

export default MoviesList;