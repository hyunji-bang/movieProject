import React from 'react';
import { MovieList, SubmitPoll } from './';

const MovieWrap = (props) => (
        <MovieList movieInfo={props.movieInfo}
                   toggleModal={props.toggleModal}
        />
);

export default MovieWrap;