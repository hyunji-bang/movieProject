import React, {Component} from 'react';
import * as service from '../services/post';

class Movie extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            pollInfo: [],
            movieInfo: '',
            pollTitle: ''
        }
    }

    componentWillMount() {
        this.fetchPollInfo();
    }

    fetchPollInfo = async () => {
        const pollInfoObj = await service.getPoll();
        const pollInfo = pollInfoObj.data;

        this.setState({
            pollInfo,
        });
    }

    render(){
        // console.log(this.props)
            return (
                <article className="PollItem__MovieList__item">
                    <strong className="PollItem__MovieList__item__title">
                        {this.props.title} <span>({this.props.data.year})</span>
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

class PollItem extends Component {
    constructor(props) { 
        super(props); 

        this.state = {
            pollData: {}
        }
    }

    componentWillMount() {
        const pollId = this.props.match.params.id;
        
        service.getPoll(pollId).then((res) => {
            this.setState({
                pollData: res.data
            });
        })
    }
    
    render() {
        return (
            <section className="PollItem MoviePolls__section">
                <h2 className="PollItem__title">{this.state.pollData.title}</h2>
                <div className="PollItem__MovieList">
                    {this.props.movieInfo.map((i, key) => {
                        return  <Movie data={i} key={key} 
                                    toggleModal={this.props.toggleModal} 
                                    movieInfo={this.props.movieInfo}/>
                    })}
                </div>
            </section>
        );
    }
};

export default PollItem;