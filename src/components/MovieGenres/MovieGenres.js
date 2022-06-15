import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './MovieGenres.module.css';
import {v4} from 'uuid';
import {getGenresId} from "../../store/actions/movies";
import cx from 'classnames'

const MovieGenres = ({genresId = [], className}) => {
    const dispatch = useDispatch()
    if (genresId.length > 3) {
        genresId.length = 3
    }
    const genresList = useSelector(state => state.genres.genres)
    const movieGenres = genresId.map(item => genresList.find(genreItem => genreItem.id === item))
    return (
        <div className={s.genres}>
    {movieGenres.map(genre =>
        <div className={cx(s.genre, className)} key={v4()} onClick={() => dispatch(getGenresId(genre?.id))}>{genre?.name}</div>)}
        </div>
    )

}

export default MovieGenres;