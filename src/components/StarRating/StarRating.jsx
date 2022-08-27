import React from 'react';
import { FaStar } from 'react-icons/fa';

import s from './StarRating.module.css';

// eslint-disable-next-line camelcase
function StarRating({ vote_average }) {
  const initialRate = Math.round(vote_average);

  // eslint-disable-next-line no-shadow
  const getColor = (stars, initialRate) => ((stars < initialRate) ? '#cfa438' : 'grey');

  return (
    <div className={s.star_rating}>

      <div>
        {Array.from({ length: 10 }).map((e, stars) => (
          <FaStar
            className={s.star}
            /* eslint-disable-next-line react/no-array-index-key */
            key={stars}
            color={getColor(stars, initialRate)}
          />
        ))}
      </div>

      <div className={s.rate}>
        {/* eslint-disable-next-line camelcase */}
        {vote_average}
      </div>

    </div>
  );
}

export default StarRating;
