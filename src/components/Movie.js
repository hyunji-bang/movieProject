import React from 'react';

const Movie = (props) => {
    return (
        <article className="MoviePolls__MovieList__item">
            <h2>{props.data.title} <span>({props.data.year})</span></h2>
            <figure onClick={() => { props.toggleModal(props.data) }}>
                <img src={props.data.imageUrl} alt={props.data.title}/>
            </figure>
            <div className="MoviePolls__MovieList__item__desc">
                <p className="movieDirector">{props.data.director}</p>
                <p className="movieGenres">{props.data.genres}</p>
                <p className="movieDesc">{props.data.description}</p>
            </div>
        </article>
    );
};

export default Movie;
