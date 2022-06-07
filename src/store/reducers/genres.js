import {GENRES} from "../../constans/actionsTypes";

let initialState = {
    genres: []
}
const genres = (state = initialState, action) => {
    switch (action.type) {
        case GENRES: {
            return {
                ...state,
                genres: action.genres
            }
        }
        default:
            return state
    }
}

export default genres;