import movies from "./reducers/movies";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'
import genres from "./reducers/genres";
import selectedMovie from "./reducers/selectedMovie";

const reducers = combineReducers({
    movies: movies,
    genres: genres,
    selectedMovie: selectedMovie
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleWare))