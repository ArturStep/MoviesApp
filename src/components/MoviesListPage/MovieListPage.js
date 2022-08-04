import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {v4} from 'uuid';

import {createPages} from './pageCreator';

import s from './MovieListPage.module.css'
import {useSelector} from "react-redux";
import {BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage} from "react-icons/bi";

const MovieListPage = () => {
  const [currentPage, setCurrentPage] = useSearchParams()

  // TODO: брать данные о пагинации из запроса
  const pagesCount = useSelector(({movies}) => movies.meta.totalPage);

  const pages = [];

  //TODO: отрефакторить функцию
  createPages(pages, pagesCount > 500 ? 500 : pagesCount, Number(currentPage.get('page')))

  return (
    <div className={s.pages_container}>
      { (Number(currentPage.get('page')) === 1) ? null :
        <>

          <BiFirstPage className={s.arrow} onClick={() => {
            setCurrentPage({page: 1})
          }}/>

          <BiChevronLeft className={s.arrow} onClick={() => {
          setCurrentPage({page: Number(currentPage.get('page')) - 1})
        }}/>

        </>
      }

      <div className={s.pages}>
        {pages.map(page =>
          <div className={Number(currentPage.get('page')) === page ? s.current_page : s.page}
               key={v4()}
               onClick={() => {
                 setCurrentPage({page: page})
               }
               }>{page}</div>
        )}
      </div>

      {(Number(currentPage.get('page')) === (pagesCount > 500 ? 500 : pagesCount)) ? null :
        <>
          <BiChevronRight className={s.arrow} onClick={() => {
            setCurrentPage({page: Number(currentPage.get('page')) + 1})
          }}/>
          <BiLastPage className={s.arrow} onClick={() => {
            setCurrentPage({page: pagesCount > 500 ? 500 : pagesCount})
          }}/>
        </>
      }
    </div>
  )
}

export default MovieListPage;