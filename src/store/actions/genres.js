import {GENRES} from "../../constans/actionsTypes";
import {moviesAPI} from "../../api/api";

export const setGenres = (genres) => ({type: GENRES, genres})

export const getGenres = () => {
    return (dispatch) => {
        moviesAPI.getGenres()
            .then(results => {
                dispatch(setGenres(results))
            })
    }
}