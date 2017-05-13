import React from 'react';

const Movie = (props) => {
    return (
        <li className="MoviePolls__Content__MovieList__Item" >
            <h2>{props.data.title}</h2>
            <p><img src={props.data.imageUrl} alt={props.data.title}/></p>
            <p>{props.data.director}</p>
            <p>{props.data.year}</p>
            <p>{props.data.genres}</p>
            <p>{props.data.description}</p>
        </li>
    );
};

export default Movie;