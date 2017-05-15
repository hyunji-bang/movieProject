import React from 'react';

const Movie = (props) => {
    return (
        <article className="MoviePolls__MovieList__item">
            <h2>{props.data.title}</h2>
            <figure onClick={() => { props.toggleModal(props.data) }}>
                <img src={props.data.imageUrl} alt={props.data.title}/>
            </figure>
            <div className="MoviePolls__MovieList__item__desc">
                <p>{props.data.director}</p>
                <p>{props.data.year}</p>
                <p>{props.data.genres}</p>
                <p>{props.data.description}</p>
            </div>
        </article>
    );
};

export default Movie;