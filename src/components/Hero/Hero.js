import React, {useState} from 'react';
import s from './Hero.module.css'
import {useDispatch, useSelector} from "react-redux";
import StarRating from "../StarRating/StarRating";
import MovieGenres from "../MovieGenres/MovieGenres";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import {getMovieTrailer} from "../../store/actions/selectedMovie";
import {BsFillPlayBtnFill} from "react-icons/bs";

const Hero = () => {
    const dispatch = useDispatch()
    const [playTrailer, setPlayTrailer] = useState(false)
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
    const movie = useSelector(state => state.selectedMovie.selectedMovie)
    const movies = useSelector(state => state.movies.movies)
    const movieData = movie ? movie : movies[0]
    return (
            <div className={s.hero}
            style={{backgroundImage: `url('${IMAGE_PATH}${movieData?.backdrop_path}')`}}>
                <div className={s.item} key={movieData?.id}>
                    <h1 className={s.title}>{movieData?.title}</h1>
                    <button className={s.btn} onClick={() => {setPlayTrailer(true)
                        dispatch(getMovieTrailer(movieData?.id))}
                    }>Play trailer <BsFillPlayBtnFill className={s.icon} /></button>
                    <p className={s.overview}>{movieData?.overview}</p>
                    <div className={s.count}>{movieData?.vote_count}</div>
                    <StarRating vote_average={movieData?.vote_average}/>
                    <div className={s.bottom_content}>
                    <MovieGenres genresId={movieData?.genre_ids}
                                 className={s.genreItem}/>
                    <div className={s.date}>{movieData?.release_date.slice(0, -6)}</div>
                    </div>
                    {playTrailer ?  <div className={s.trailer} onClick={() => setPlayTrailer(false)}>
                        {playTrailer ? <MovieTrailer videos={movieData?.videos}/> : null}
                    </div> : null}
                </div>
        </div>
    )
}

export default Hero