import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {v4} from "uuid";
import {BiFirstPage, BiLastPage} from "react-icons/bi";

import {createPages} from "./pageCreator";

import s from './MovieListPage.module.css'

const MovieListPage = () => {
    const [currentPage , setCurrentPage] = useSearchParams()
    const pagesCount = 99;
    const pages = [];
    createPages(pages, pagesCount, Number(currentPage.get('page')))
    return (
        <div className={s.pages_container}>
            <BiFirstPage className={s.arrow} onClick={() => {setCurrentPage({page: 1})}}/>
        <div className={s.pages}>
            {pages.map(page =>
              <div className={Number(currentPage.get('page')) === page ? s.current_page : s.page}
          key={v4()}
          onClick={() =>{setCurrentPage({page: page ? page : 1})}
    }>{page}</div>
            )}
        </div>
            <BiLastPage className={s.arrow} onClick={() => {setCurrentPage({page: 99})}}/>
        </div>
    )
}

export default MovieListPage;