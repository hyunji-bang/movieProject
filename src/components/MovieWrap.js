import React from 'react';
import { MovieList, SubmitPoll } from './';

const MovieWrap = (props) => (
    <div className="MoviePolls__Content">
        <MovieList movieTitle={props.movieTitle}></MovieList>
        <SubmitPoll/>
    </div>
);

export default MovieWrap;