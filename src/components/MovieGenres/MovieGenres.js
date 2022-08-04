import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {v4} from 'uuid';

import s from './MovieGenres.module.css';

const MovieGenres = ({genresId = [], className}) => {
  const genresList = useSelector(state => state.genres.genres)

  const navigate = useNavigate()

  const genreIdsSlice = genresId.slice(0, 3);

  const movieGenres = genreIdsSlice.map(item => genresList.find(genreItem => genreItem.id === item))

  if (!movieGenres.length) return null;

  return (
    <div className={s.genres}>
      {movieGenres.map(genre =>
        <div className={s.genre + ' ' + className}
             key={v4()}
             onClick={() => navigate(`/genre/${genre?.id}`)}>{genre?.name}</div>)}
    </div>
  )

}

export default MovieGenres;