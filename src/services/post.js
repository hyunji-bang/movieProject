
import axios from 'axios';

export function getTitle(pollId) {
    return axios.get('http://localhost:3030/polls/' + pollId);
}

export function getMovie(movieId) {
    return axios.get('http://localhost:3030/movies/' + movieId);
}
