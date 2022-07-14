import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {v4} from "uuid";

import GenresList from "../GenresList/GenresList";
import SearchMovie from "../SearchMovie/SearchMovie";
import {moviePathname} from "../../constans/moviePathname";

import s from './Navbar.module.css'
import {useLocation} from "react-router";

const Navbar = () => {
  const movieRoutes = useLocation()
  const [selectedGenre, setSelectedGenre] = useState('Genres')
    const OnclickGetGenresId = (genreName) => {
        setSelectedGenre(genreName)
    }
    const genres = useSelector(state => state.genres.genres)
    return (
        <div className={s.navbar}>
            <div className={s.navigation}>
              {moviePathname.map(item =>
                <NavLink className={movieRoutes.pathname === item.path ? s.active_link : s.link}
                         onClick={() => setSelectedGenre('Genres')}
                         to={`${item.path}`}
                         key={v4()}
                >{item.label}</NavLink>
              )}
                <GenresList genres={genres}
                            OnclickGetGenresId={OnclickGetGenresId}
                            selectedGenre={selectedGenre}/>
            </div>
            <div>
                <SearchMovie/>
            </div>
        </div>

    )
}

export default Navbar;