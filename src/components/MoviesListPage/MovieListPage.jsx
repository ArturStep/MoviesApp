import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 } from 'uuid';

import { useSelector } from 'react-redux';
import {
  BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage,
} from 'react-icons/bi';
import { createPages } from './pageCreator';

import s from './MovieListPage.module.css';

function MovieListPage() {
  const [currentPage, setCurrentPage] = useSearchParams();

  const pagesCount = useSelector(({ movies }) => movies.meta.totalPage);

  const pages = [];

  createPages(pages, pagesCount > 500 ? 500 : pagesCount, Number(currentPage.get('page')));

  return (
    <div className={s.pages_container}>
      { (Number(currentPage.get('page')) === 1) ? null
        : (
          <>

            <BiFirstPage
              className={s.arrow}
              onClick={() => {
                setCurrentPage({ page: 1 });
              }}
            />

            <BiChevronLeft
              className={s.arrow}
              onClick={() => {
                setCurrentPage({ page: Number(currentPage.get('page')) - 1 });
              }}
            />

          </>
        )}

      <div className={s.pages}>
        {pages.map((page) => (
          <button
            type="button"
            className={Number(currentPage.get('page')) === page ? s.current_page : s.page}
            key={v4()}
            onClick={() => {
              setCurrentPage({ page });
            }}
          >
            {page}
          </button>
        ))}
      </div>

      {(Number(currentPage.get('page')) === (pagesCount > 500 ? 500 : pagesCount)) ? null
        : (
          <>
            <BiChevronRight
              className={s.arrow}
              onClick={() => {
                setCurrentPage({ page: Number(currentPage.get('page')) + 1 });
              }}
            />
            <BiLastPage
              className={s.arrow}
              onClick={() => {
                setCurrentPage({ page: pagesCount > 500 ? 500 : pagesCount });
              }}
            />
          </>
        )}
    </div>
  );
}

export default MovieListPage;
