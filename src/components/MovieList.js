import React, { Component } from 'react';
import { Movie } from './';

const MovieList = (props) => { // movieInfo, toggleModal, selectedData
    return (
        <section className="MoviePolls__MovieList">
            {props.movieInfo.map((item, num) => {
                return  <Movie data={item} key={num} toggleModal={props.toggleModal} 
                                                     movieInfo={props.movieInfo}/>
            })}
        </section>
    );
};


export default MovieList;