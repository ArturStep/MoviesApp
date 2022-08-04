import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {getGenres} from "./store/actions/genres";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Routes/Routes";

import './App.css';
import {useLocation} from "react-router";

const App = () => {
  const dispatch = useDispatch()

  const movieRoutes = useLocation()

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  return (
    <div className='app'>
      <Hero/>
      <Navbar/>
      <div className='container'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
