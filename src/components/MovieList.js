import React, { Component } from 'react';
import { Movie } from './';

const MovieList = (props) => {
    return (
        <ul className="MoviePolls__Content__MovieList">

            {props.movieInfo.map((i, key) => {
                return  <Movie data={i} key={key} />
            })}
        </ul>
    );
};


export default MovieList;