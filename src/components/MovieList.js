import React, { Component } from 'react';
import { Movie } from './';

const MovieList = (props) => {
    return (
        <ul className="MoviePolls__Content__MovieList">
            <Movie movieTitle={props.movieTitle}/>
        </ul>
    );
};


export default MovieList;