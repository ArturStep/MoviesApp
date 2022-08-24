import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsFillPlayBtnFill } from 'react-icons/bs';

import StarRating from '../StarRating/StarRating';
import MovieGenres from '../MovieGenres/MovieGenres';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import default_hero from '../../assets/img/default_hero.jpg';

import s from './Hero.module.css';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

function Hero() {
  const [playTrailer, setPlayTrailer] = useState(false);

  const movie = useSelector(({ selectedMovie }) => selectedMovie.selectedMovie);

  return (
    movie
      ? (
        <div
          className={s.hero}
          style={{
            backgroundImage: movie?.backdrop_path
              ? `url('${IMAGE_PATH}${movie?.backdrop_path}')` : `url('${default_hero}')`,
          }}
        >

          <div className={s.item} key={movie?.id}>

            <h1 className={s.title}>{movie?.title}</h1>

            {!movie?.videos?.results.length ? null
              : (
                <button className={s.playBtn} onClick={() => setPlayTrailer(true)}>
                  Play trailer
                  {' '}
                  <BsFillPlayBtnFill className={s.icon} />
                </button>
              )}

            <p className={s.overview}>{movie?.overview}</p>

            <div className={s.voteCount}>{movie?.vote_count}</div>

            <StarRating vote_average={movie?.vote_average.toFixed(1)} />

            <div className={s.bottom_content}>

              <MovieGenres
                genresId={movie?.genres?.map((genre) => genre.id)}
                className={s.genreItem}
              />

              {movie?.runtime ? (
                <div className={s.runtime}>
                  {movie?.runtime}
                  {' '}
                  min
                </div>
              ) : null}

              <div className={s.date}>{movie?.release_date.slice(0, -6)}</div>

            </div>

            {playTrailer && (
            <div className={s.trailer} onClick={() => setPlayTrailer(false)}>
              <MovieTrailer videos={movie?.videos} />
            </div>
            )}

          </div>

        </div>
      ) : <img className={s.default_hero} src={default_hero} alt="default_hero" />);
}

export default Hero;
