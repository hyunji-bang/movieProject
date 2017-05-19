import React from 'react';

const MoviePolls = () => {
    return (
        <section className="MoviePolls__MovieList MoviePolls__section">
            <h2>What is your</h2>
            <article className="MoviePolls__MovieList__item">
                <strong className="MoviePolls__MovieList__item__title">
                    MovieName <span>(Years)</span>
                </strong>
                <figure>
                    <img src="" alt="sample"/>
                </figure>
                <div className="MoviePolls__MovieList__item__desc">
                    <p className="movieDirector">Director</p>
                    <p className="movieGenres">Genre</p>
                    <p className="movieDesc">Desc</p>
                </div>
            </article>
            <article className="MoviePolls__MovieList__item">
                <strong className="MoviePolls__MovieList__item__title">
                    MovieName <span>(Years)</span>
                </strong>
                <figure>
                    <img src="" alt="sample"/>
                </figure>
                <div className="MoviePolls__MovieList__item__desc">
                    <p className="movieDirector">Director</p>
                    <p className="movieGenres">Genre</p>
                    <p className="movieDesc">Desc</p>
                </div>
          </article>
            <article className="MoviePolls__MovieList__item">
                <strong className="MoviePolls__MovieList__item__title">
                    MovieName <span>(Years)</span>
                </strong>
                <figure>
                    <img src="" alt="sample"/>
                </figure>
                <div className="MoviePolls__MovieList__item__desc">
                    <p className="movieDirector">Director</p>
                    <p className="movieGenres">Genre</p>
                    <p className="movieDesc">Desc</p>
                </div>
          </article>
        </section>
    );
};

export default MoviePolls;