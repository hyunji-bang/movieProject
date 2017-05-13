import React, { Component } from 'react';
import { Movie } from './';

const MovieList = () => {
    return (
        <ul className="MoviePolls__Content__MovieList">
            <Movie/>
            <Movie/>
            <Movie/>
        </ul>
    );
};


export default MovieList;