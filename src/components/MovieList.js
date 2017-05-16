import React, { Component } from 'react';
import { Movie } from './';

const MovieList = (props) => {
    return (
        <section className="MoviePolls__MovieList">
            {props.movieInfo.map((i, key) => {
                return  <Movie data={i} key={key} toggleModal={props.toggleModal} movieInfo={props.movieInfo}/>
            })}
        </section>
    );
};


export default MovieList;