import './App.css';
import MoviesList from "./components/MoviesList/MoviesList";
import React, {useEffect} from "react";
import {Route, Routes} from "react-router";
import {Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {useDispatch} from "react-redux";
import {getGenres} from "./store/actions/genres";
import Hero from "./components/Hero/Hero";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenres())
    }, [])
    return (
        <div className='app'>
            <div>
                <Hero/>
            </div>
            <div>
                <Navbar/>
            </div>
            <div className='container'>
                <Routes>
                    <Route path='/*' element={<MoviesList/>}/>
                    <Route path="/" element={<Navigate to={'/popular'}/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
