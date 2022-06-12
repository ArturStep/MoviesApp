import React from 'react';
import {useSelector} from "react-redux";

const MovieGenres = ({genresId}) => {
    const genresList = useSelector(state => state.genres.genres)

    return (
    <div>hello</div>
    )
}

export default MovieGenres;