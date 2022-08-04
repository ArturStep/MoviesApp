import YouTube from 'react-youtube';

import s from './MovieTrailer.module.css'

const MovieTrailer = ({videos}) => {
  const video = videos?.results.find(vid => !!vid.official)
  //TODO: добавить проверки или лоадеры

  return (
    <YouTube
      videoId={video?.key}
      className={s.video}
      opts={{
        width: '840',
        height: '560',
      }}
    />
  )
}

export default MovieTrailer;