import React, {useState} from 'react';
import {v4} from "uuid";
import s from './MovieListPage.module.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../../store/actions/movies";
import {useLocation} from "react-router";
import {createPages} from "./pageCreator";
import {BiFirstPage, BiLastPage} from "react-icons/bi";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";

const MovieListPage = () => {
    const movieRoutes = useLocation()
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getMovies(movieRoutes.pathname , currentPage))
        }, [currentPage]
    )
    const pagesCount = 99;
    const pages = [];
    createPages(pages, pagesCount, currentPage)
    return (
        <div className={s.pages_container}>
            <BiFirstPage className={s.arrow} onClick={() => setCurrentPage(1)}/>
            <MdNavigateBefore className={s.arrow} onClick={() => setCurrentPage(currentPage - 1)} />
        <div className={s.pages}>
            {pages.map(page =>
    <div className={currentPage === page ? s.current_page : s.page}
          key={v4()}
          onClick={() =>setCurrentPage(page)}>{page}</div>
            )}
        </div>
            <MdNavigateNext className={s.arrow} onClick={() => setCurrentPage(currentPage + 1)} />
            <BiLastPage className={s.arrow} onClick={() => setCurrentPage(99)}/>
        </div>
    )
}

export default MovieListPage;