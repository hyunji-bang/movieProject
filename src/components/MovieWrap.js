import React from 'react';
import { MovieList } from './';

const MovieWrap = (props) => ( // movieInfo, toggleModal, selectedData
        <MovieList movieInfo={props.movieInfo}
                   toggleModal={props.toggleModal}
        />
);

export default MovieWrap;