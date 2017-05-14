import React from 'react';

const Movie = (props) => {
    return (
        <article className="MoviePolls__MovieList__Item">
            <h2>{props.data.title}</h2>
            <figure onClick={props.toggleModal}>
                <img src={props.data.imageUrl} alt={props.data.title}/>
            </figure>
            <p>{props.data.director}</p>
            <p>{props.data.year}</p>
            <p>{props.data.genres}</p>
            <p>{props.data.description}</p>
        </article>
    );
};

export default Movie;