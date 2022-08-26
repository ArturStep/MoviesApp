import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

import s from './MovieGenres.module.css';

function MovieGenres({ genresId = [], className }) {
  const genresList = useSelector((state) => state.genres.genres);

  const navigate = useNavigate();

  const genreIdsSlice = genresId.slice(0, 3);

  const movieGenres = genreIdsSlice.map((item) => genresList.find(
    (genreItem) => genreItem.id === item,
  ));

  if (!movieGenres.length) return null;

  return (
    <div className={s.genres}>
      {movieGenres.map((genre) => (
        <button
          type="button"
          className={`${s.genre} ${className}`}
          key={v4()}
          onClick={() => navigate(`/genre/${genre?.id}`)}
        >
          {genre?.name}
        </button>
      ))}
    </div>
  );
}

export default MovieGenres;
