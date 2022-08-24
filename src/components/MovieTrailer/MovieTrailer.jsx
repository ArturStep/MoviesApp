import YouTube from 'react-youtube';

import s from './MovieTrailer.module.css';

function MovieTrailer({ videos }) {
  const video = videos?.results.find((vid) => !!vid.official);

  return (
    <YouTube
      videoId={video?.key}
      className={s.video}
      opts={{
        width: '840',
        height: '560',
      }}
    />
  );
}

export default MovieTrailer;
