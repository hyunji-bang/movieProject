
import axios from 'axios';

export function getPoll(pollId = '') {
    return axios.get('http://localhost:3030/polls/' + pollId);
}

export function getVote(pollId, movieId) {
    return axios.get('http://localhost:3030/votes/?pollId=' + pollId + '&movieId=' + movieId);
}

export function getMovie(param = '') {
    return axios.get('http://localhost:3030/movies/' + param);
}

export function postVote(pollId, movieId, name) {
    return axios.post('http://localhost:3030/votes', { pollId, movieId, name });
}

export function postPoll(movieIds, title) {
    return axios.post('http://localhost:3030/polls/', { movieIds, title });
}
