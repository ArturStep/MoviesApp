import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {v4} from 'uuid';
import cx from 'classnames'

import s from './MovieGenres.module.css';

const MovieGenres = ({genresId = [], className}) => {
  const navigate = useNavigate()
  if (genresId.length > 3) {
    genresId.length = 3
  }
  const genresList = useSelector(state => state.genres.genres)
  const movieGenres = genresId.map(item => genresList.find(genreItem => genreItem.id === item))
  return (
    <div className={s.genres}>
      {movieGenres.map(genre =>
        <div className={cx(s.genre, className)}
             key={v4()}
             onClick={() => navigate(`/genre/${genre?.id}`)}>{genre?.name}</div>)}
    </div>
  )

}

export default MovieGenres;