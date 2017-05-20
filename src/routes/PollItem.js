import React from 'react';

const Movie = (props) => {
    return (
        <article className="PollItem__MovieList__item">
            <strong className="PollItem__MovieList__item__title">
                {props.data.title} <span>({props.data.year})</span>
            </strong>
            <figure onClick={() => { props.toggleModal(props.data) }}>
                <img src={props.data.imageUrl} alt={props.data.title}/>
            </figure>
            <div className="PollItem__MovieList__item__desc">
                <p className="movieDirector">{props.data.director}</p>
                <p className="movieGenres">{props.data.genres}</p>
                <p className="movieDesc">{props.data.description}</p>
            </div>
        </article>
    );
};

const PollItem = (props) => {
    return (
        <section className="PollItem MoviePolls__section">
            <h2 className="PollItem__title">{props.pollTitle}</h2>
            <div className="PollItem__MovieList">
                {props.movieInfo.map((i, key) => {
                    return  <Movie data={i} key={key} 
                                toggleModal={props.toggleModal} 
                                movieInfo={props.movieInfo}/>
                })}
            </div>
        </section>
    );
};

export default PollItem;