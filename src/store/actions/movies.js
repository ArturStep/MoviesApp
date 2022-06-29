import {MOVIES} from "../../constans/actionsTypes";
import {moviesAPI} from "../../api/api";

export const setMovies = (movies) => ({type: MOVIES, movies})

export const getMovies = (moviesPath, page) => {
    return (dispatch) => {
    moviesAPI.getMovies(moviesPath, page)
        .then(results => {
            dispatch(setMovies(results))
        })
    }
}

export const getGenresId = (genres) => {
    return (dispatch) => {
        moviesAPI.getGenresId(genres)
            .then(results => {
                dispatch(setMovies(results))
            })
    }
}

export const getSearchMovie = (searchKey) => {
    return (dispatch) => {
        moviesAPI.getSearchMovie(searchKey)
            .then(results => {
                dispatch(setMovies(results))
            })
    }
}