import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './GenresList.module.css';

function Genres({ onclickGetGenresById, setIsActive, genre }) {
  const navigate = useNavigate();

  const onClickSelectGenre = () => {
    onclickGetGenresById(genre.name);
    setIsActive(false);
    navigate(`/genre/${genre.id}`);
  };

  return (
    <div
      className={s.dropdown_item}
      onClick={onClickSelectGenre}
    >
      {genre.name}
    </div>
  );
}

export default Genres;
