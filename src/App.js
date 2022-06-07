import './App.css';
import MoviesList from "./components/MoviesList/MoviesList";
import React, {useEffect} from "react";
import {Route, Routes} from "react-router";
import {POPULAR, TOP_RATE, UPCOMING} from "./constans/moviesPath";
import Navbar from "./components/Navbar/Navbar";
import {useDispatch} from "react-redux";
import {getGenres} from "./store/actions/genres";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    },[])
    return (
        <div className='app'>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<MoviesList moviesPath={POPULAR}/>}/>
                    <Route path='/popular' element={<MoviesList moviesPath={POPULAR}/>}/>
                    <Route path='/top_rate' element={<MoviesList moviesPath={TOP_RATE}/>}/>
                    <Route path='/upcoming' element={<MoviesList moviesPath={UPCOMING}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
