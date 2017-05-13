import React from 'react';

const Movie = (props) => {
    return (
        <li className="MoviePolls__Content__MovieList__Item">
            {props.movieTitle}
        </li>
    );
};

export default Movie;