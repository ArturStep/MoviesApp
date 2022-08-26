import React from 'react';
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
    // eslint-disable-next-line no-param-reassign
    scrollRef.current = null;
  };

  document.addEventListener('scroll', () => {
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
    <div>
      {arrow ? (
        <BsArrowDownCircleFill
          className={classNames(s.arrow, { [s.arrowTop]: arrowTop })}
          onClick={onClickScrollToSelectedMovie}
        />
      ) : null}
    </div>
  );
}

export default ScrollArrow;
