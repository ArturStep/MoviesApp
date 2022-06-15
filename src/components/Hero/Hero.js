import React from 'react';
import s from './Hero.module.css'
import {useSelector} from "react-redux";
import StarRating from "../StarRating/StarRating";
import MovieGenres from "../MovieGenres/MovieGenres";

const Hero = () => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
    const movie = useSelector(state => state.selectedMovie.selectedMovie)
    const movies = useSelector(state => state.movies.movies)
    const movieData = movie ? movie : movies[0]
    return (
            <div className={s.hero}
            style={{backgroundImage: `url('${IMAGE_PATH}${movieData?.backdrop_path}')`}}>
                <div className={s.item} key={movieData?.id}>
                    <h1 className={s.title}>{movieData?.title}</h1>
                    <p className={s.overview}>{movieData?.overview}</p>
                    <StarRating vote_average={movieData?.vote_average}/>
                    <MovieGenres genresId={movieData?.genre_ids}
                                 className={s.genreItem}/>
                </div>
        </div>
    )
}

export default Hero