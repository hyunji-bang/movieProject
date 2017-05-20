
import axios from 'axios';

export function getTitle(pollId) {
    return axios.get('http://localhost:3030/polls/' + pollId);
}

export function getMovie() {
    return axios.get('http://localhost:3030/movies/');
}

export function postVote(pollId, movieId, name) {
    return axios.post('http://localhost:3030/votes', { pollId, movieId, name });
}
