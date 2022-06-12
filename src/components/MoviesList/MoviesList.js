import {useDispatch, useSelector} from "react-redux";
import {BASE_IMAGE_URL} from "../../constans/baseImageUrl";
import s from './MoviesList.module.css'
import {useEffect} from "react";
import {getMovies} from "../../store/actions/movies";
import no_poster from '../../assets/img/no_poster.jpg'
import {getSelectedMovie} from "../../store/actions/selectedMovie";
import {useLocation} from "react-router";
import MovieGenres from "../MovieGenres/MovieGenres";

const MoviesList = () => {
    const movieRoutes = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getMovies(movieRoutes.pathname))
        }, []
    )
    const movies = useSelector(state => state.movies.movies)

    return (
        <div className={s.container}>
            {movies.map(item =>
                <div className={s.item} key={item.id} onClick={() => dispatch(getSelectedMovie(item))}>
                    <img className={s.poster}
                         src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : no_poster}
                         alt={'no img poster'}/>
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
    )
}

export default MoviesList;