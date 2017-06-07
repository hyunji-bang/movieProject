import React, {Component} from 'react';

class MovieItem extends Component { 
    constructor(props) { 
        super(props); 
    }

    render(){
        // console.log(this.props)
            return (
                <article className="PollItem__MovieList__item">
                    <strong className="PollItem__MovieList__item__title">
                        {this.props.data.title} <span>({this.props.data.year})</span>
                    </strong>
                    <figure onClick={() => { this.props.toggleModal(this.props.data) }}>
                        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
                    </figure>
                    <div className="PollItem__MovieList__item__desc">
                        <p className="movieDirector">{this.props.data.director}</p>
                        <p className="movieGenres">{this.props.data.genres}</p>
                        <p className="movieDesc">{this.props.data.description}</p>
                    </div>
                </article>
        )
    }
}

export default MovieItem;