import {MOVIES} from "../../constans/actionsTypes";

let initialState = {
  movies: []
}
const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES: {
      return {
        ...state,
        movies: action.movies
      }
    }
    default:
      return state
  }
}

export default movies;