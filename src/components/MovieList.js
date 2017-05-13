import React, { Component } from 'react';
import { Movie } from './';

const MovieList = () => {
    return (
        <ul className="MovieList">
            <Movie/>
            <Movie/>
            <Movie/>
        </ul>
    );
};


export default MovieList;