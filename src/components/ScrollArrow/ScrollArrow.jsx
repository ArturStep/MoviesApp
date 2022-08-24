import { BsArrowDownCircleFill } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';

import classNames from 'classnames';

import s from '../MoviesCards/MoviesCards.module.css';

function ScrollArrow({
  arrow,
  setArrow,
  arrowTop,
  setArrowTop,
  scrollRef,
}) {
  const scrollTo = () => {
    animateScroll.scrollTo(scrollRef.current);
    scrollRef.current = null;
  };

  document.addEventListener('scroll', (e) => {
    if (!!scrollRef.current && (scrollRef.current < document.documentElement.scrollTop)) {
      setArrowTop(true);
    } else if (!!scrollRef.current && (scrollRef.current > document.documentElement.scrollTop)) {
      setArrowTop(false);
    }
  });

  const onClickScrollToSelectedMovie = () => {
    scrollTo();
    setArrow(false);
  };

  return (
    <>
      {arrow ? (
        <BsArrowDownCircleFill
          className={classNames(s.arrow, { [s.arrowTop]: arrowTop })}
          onClick={onClickScrollToSelectedMovie}
        />
      ) : null}
    </>
  );
}

export default ScrollArrow;
