import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import movies from './reducers/movies';
import genres from './reducers/genres';
import selectedMovie from './reducers/selectedMovie';

const reducers = combineReducers({
  movies,
  genres,
  selectedMovie,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
