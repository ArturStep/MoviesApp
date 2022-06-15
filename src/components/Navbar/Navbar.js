import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import {useDispatch, useSelector} from "react-redux";
import GenresList from "../GenresList/GenresList";
import {getGenresId} from "../../store/actions/movies";
import SearchMovie from "../SearchMovie/SearchMovie";

const Navbar = () => {
    const [selectedGenre, setSelectedGenre] = useState('Genres')
    const dispatch = useDispatch();
    const OnclickGetGenresId = (genres, genreName) => {
        dispatch(getGenresId(genres))
        setSelectedGenre(genreName)
    }
    const genres = useSelector(state => state.genres.genres)
    return (
        <div className={s.navbar}>
            <div className={s.navigation}>
                <NavLink className={s.link} onClick={() => setSelectedGenre('Genres')} to={'/popular'}>Popular</NavLink>
                <NavLink className={s.link} onClick={() => setSelectedGenre('Genres')} to={'/top_rated'}>Top
                    Rate</NavLink>
                <NavLink className={s.link} onClick={() => setSelectedGenre('Genres')}
                         to={'/upcoming'}>Upcoming</NavLink>
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