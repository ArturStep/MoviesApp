import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {v4} from 'uuid';

import GenresList from '../GenresList/GenresList';
import SearchMovie from '../SearchMovie/SearchMovie';
import {moviesPathnames} from '../../constans/moviesPathnames';

import s from './Navbar.module.css'
import {useLocation} from 'react-router';

const Navbar = () => {
  const [selectedGenre, setSelectedGenre] = useState('Genres')

  const genres = useSelector(state => state.genres.genres)

  const movieRoutes = useLocation()

    const OnclickGetGenresById = (genreName) => {
        setSelectedGenre(genreName)
    }

    return (
        <div className={s.navbar}>

            <div className={s.navigation}>

              {moviesPathnames.map(moviePathname =>
                <NavLink className={movieRoutes.pathname === moviePathname.path ? s.active_link : s.link}
                         onClick={() => setSelectedGenre('Genres')}
                         to={`${moviePathname.path}`}
                         key={v4()}
                >{moviePathname.label}</NavLink>
              )}
                <GenresList genres={genres}
                            onclickGetGenresById={OnclickGetGenresById}
                            selectedGenre={selectedGenre}/>

            </div>
            <div>

                <SearchMovie/>

            </div>

        </div>

    )
}

export default Navbar;