import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi";

import s from './GenresList.module.css'

const GenresList = ({genres, OnclickGetGenresId, selectedGenre}) => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)
    const genre = genres.map(item =>
        <div key={item.id}>
            <div className={s.dropdown_item}
                 onClick={(e) =>{
                     OnclickGetGenresId(item.name)
                     setIsActive(false)
                     navigate(`/genre/${item.id}`)
                 }
            }>
                {item.name}</div>
        </div>)
    return (
        <div className={s.dropdown}>
       <div className={s.dropdown_btn} onClick={(e) =>
       setIsActive(prevState => !prevState)}>
           <div>{selectedGenre}</div>
           <BiChevronDown className={s.arrow} />
       </div>
            {isActive && (
            <div className={s.dropdown_content}>
                {genre}
            </div>
            )}
        </div>
        )
}

export default GenresList;