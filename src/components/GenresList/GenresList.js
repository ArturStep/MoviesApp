import React, {useMemo, useState} from 'react';
import {BiChevronDown} from 'react-icons/bi';

import s from './GenresList.module.css'
import Genres from './Genres';

const GenresList = ({genres, onclickGetGenresById, selectedGenre}) => {
  const [isActive, setIsActive] = useState(false)

 //TODO: нормальный нейминг - item
  const genresList = useMemo(() => genres.map(genre =>
  //TODO: вынести в компаненту
    <Genres onclickGetGenresById={onclickGetGenresById} setIsActive={setIsActive} genre={genre} key={genre.id}/>
  ), [genres]);

  return (
    <div className={s.dropdown}>

      <div className={s.dropdown_btn} onClick={(e) =>
        setIsActive(prevState => !prevState)}>

        <div>{selectedGenre}</div>

        <BiChevronDown />

      </div>

      {isActive && (
        <div className={s.dropdown_content}>
          {genresList}
        </div>
      )}

    </div>
  )
}

export default GenresList;