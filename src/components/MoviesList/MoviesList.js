import {useDispatch, useSelector} from "react-redux";
import {BASE_IMAGE_URL} from '../../constans/baseImageUrl';
import s from './MoviesList.module.css'
import {useEffect, useRef, useState} from 'react';
import {getMovies} from '../../store/actions/movies';
import no_poster from '../../assets/img/no_poster.jpg'
import {getSelectedMovie} from '../../store/actions/selectedMovie';
import {useLocation} from 'react-router';
import MovieGenres from '../MovieGenres/MovieGenres';
import {animateScroll} from 'react-scroll';
import MovieListPage from "../MoviesListPage/MovieListPage";
import {BsArrowDownCircleFill} from "react-icons/bs";
import classNames from "classnames";

const MoviesList = () => {
    const movieRoutes = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getMovies(movieRoutes.pathname))
            setArrow(false)
        }, [movieRoutes.pathname]
    )
    const movies = useSelector(state => state.movies.movies)
    const [arrow, setArrow] = useState(false)
    const [arrowTop, setArrowTop] = useState(false)
    const ref = useRef(null)
    const scrollToTop = () => {
        ref.current = document.body.scrollTop || document.documentElement.scrollTop
        animateScroll.scrollToTop()
        setArrow(true)
    }
    const scrollTo = () => {
        animateScroll.scrollTo(ref.current)
        ref.current = null
    }
    const moviesPath = ['popular', 'top_rated', 'upcoming']
    document.addEventListener('scroll', (e) => {
        if (!!ref.current && (ref.current + 200 <  document.documentElement.scrollTop)) {
            setArrowTop(true)} else if (!!ref.current && (ref.current - 200 >  document.documentElement.scrollTop)) {
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
            {moviesPath.includes(movieRoutes.pathname.slice(1)) && <MovieListPage />}
            {arrow ? <BsArrowDownCircleFill className={classNames(s.arrow, {[s.arrowTop]: arrowTop})} onClick={() => {scrollTo()
                                                                                setArrow(false)}}
            /> : null}
        </div>
    )
}

export default MoviesList;