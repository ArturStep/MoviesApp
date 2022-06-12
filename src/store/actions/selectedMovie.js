import {SELECTED_MOVIE} from "../../constans/actionsTypes";

export const setSelectedMovie = (selectedMovie) => ({type: SELECTED_MOVIE, selectedMovie})

export const getSelectedMovie = (item) => {
    return (dispatch) => {
                dispatch(setSelectedMovie(item))
        console.log(item)
            }
}