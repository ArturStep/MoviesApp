import {useDispatch, useSelector} from "react-redux";
import {BASE_IMAGE_URL} from "../../constans/baseImageUrl";
import s from './MoviesList.module.css'
import {useEffect} from "react";
import {getMovies} from "../../store/actions/movies";
import no_poster from '../../assets/img/no_poster.jpg'
import StarRating from "../StarRating/StarRating";

const MoviesList = ({moviesPath}) => {
        const dispatch = useDispatch()
        useEffect(() => {
                dispatch(getMovies(moviesPath))
            }, [moviesPath]
        )
    const movies = useSelector(state => state.movies.movies)

    return (
        <div className={s.container}>
            {movies.map(item=>
                <div className={s.item} key={item.id}>
                    <img className={s.poster} src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : no_poster} alt={'no img poster'}/>
                    <StarRating vote_average={item.vote_average} />
                    <div className={s.title}>{item.title}</div>
                </div>
        )}
        </div>
    )
}

export default MoviesList;