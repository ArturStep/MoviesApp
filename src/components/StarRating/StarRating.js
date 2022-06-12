import React from 'react';
import { FaStar } from 'react-icons/fa';
import s from './StarRating.module.css'


const StarRating = ({vote_average}) => {
    const initialRate = Math.round(vote_average);

    const getColor = ( i, initialRate) => {
        return (i < initialRate) ? "#cfa438" : "grey";
    }

    return (
        <div className={s.star_rating}>
            <div>
                {Array.from({length: 10}).map((e, i) =>
                    <FaStar
                        className={s.star}
                        key={i}
                        color={getColor( i, initialRate)}
                    />)}
            </div>
            <div className={s.rate}>
                {vote_average}
            </div>
        </div>
    )
}

export default StarRating