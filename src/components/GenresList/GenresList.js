import React, {useState} from 'react';
import s from './GenresList.module.css'
import {BiChevronDown} from "react-icons/bi";

const GenresList = ({genres, OnclickGetGenresId, selectedGenre}) => {
    const [isActive, setIsActive] = useState(false)
    const genre = genres.map(item =>
        <div key={item.id}>
            <div className={s.dropdown_item}
                 onClick={(e) =>{
                     OnclickGetGenresId(item.id, item.name)
                     setIsActive(false)
                 }
            }>
                {item.name}</div>
        </div>)
    return (
        <div className={s.dropdown}>
       <div className={s.dropdown_btn} onClick={(e) =>
       setIsActive(!isActive)}>
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