import React from 'react';
import { MovieList, SubmitPoll } from './';

const MovieWrap = (props) => (
    <div className="MoviePolls__Content">
        <MovieList movieInfo={props.movieInfo}
        />
        <SubmitPoll/>
    </div>
);

export default MovieWrap;