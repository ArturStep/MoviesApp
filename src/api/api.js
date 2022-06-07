import axios from "axios";
import API_KEY from "../constans/api";

const initial =axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
        language: 'en-US'
    }
})

export const moviesAPI = {
    getMovies(moviesType, page) {
        return initial.get(`/movie${moviesType}`)
            .then(response => {
                return response.data.results
            })
    },
    getGenres() {
        return initial.get('/genre/movie/list')
            .then(response => {
                return response.data.genres
            })
    },
    getGenresId(genres) {
        return initial.get(`discover/movie?api_key=${API_KEY}&with_genres=${genres}`)
            .then(response => {
                return response.data.results
            })
    },
    getSearchMovie(searchKey) {
        return initial.get('/search/movie', {
            params: {
                query: searchKey
            }
        })
            .then(response => {
                return response.data.results
            })
    }
}