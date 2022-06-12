import {SELECTED_MOVIE} from "../../constans/actionsTypes";

let initialState = {
    selectedMovie: null
}
const selectedMovie = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_MOVIE: {
            return {
                ...state,
                selectedMovie: action.selectedMovie
            }
        }
        default:
            return state
    }
}

export default selectedMovie;