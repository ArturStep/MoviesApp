import movies from "./reducers/movies";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'
import genres from "./reducers/genres";

const reducers = combineReducers({
    movies: movies,
    genres: genres
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleWare))