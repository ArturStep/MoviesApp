import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';

import { useLocation } from 'react-router';
import GenresList from '../GenresList/GenresList';
import SearchMovie from '../SearchMovie/SearchMovie';
import { moviesPathname } from '../../constans/moviesPathnames';

import s from './Navbar.module.css';

function Navbar() {
  const [selectedGenre, setSelectedGenre] = useState('Genres');

  const genres = useSelector((state) => state.genres.genres);

  const movieRoutes = useLocation();

  const OnclickGetGenresById = (genreName) => {
    setSelectedGenre(genreName);
  };

  return (
    <div className={s.navbar}>

      <div className={s.navigation}>

        {moviesPathname.map((moviePath) => (
          <NavLink
            className={movieRoutes.pathname === moviePath.path ? s.active_link : s.link}
            onClick={() => setSelectedGenre('Genres')}
            to={`${moviePath.path}`}
            key={v4()}
          >
            {moviePath.label}
          </NavLink>
        ))}
        <GenresList
          genres={genres}
          onclickGetGenresById={OnclickGetGenresById}
          selectedGenre={selectedGenre}
        />

      </div>
      <div>

        <SearchMovie />

      </div>

    </div>

  );
}

export default Navbar;
