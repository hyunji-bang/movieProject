import React, {Component} from 'react';
import * as service from '../services/post';
import { ModalWrap, MovieItem } from '../components/';

import { Link } from 'react-router-dom';

class PollItem extends Component {
    constructor(props) { 
        super(props); 

        this.state = {
            toggleModal: false,
            pollData: {},
            movieData: []
        }

        this.setVote = this.setVote.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        const pollId = this.props.match.params.id;

        service.getPoll(pollId).then((res) => {
            this.setState({ pollData: res.data }, () => {
                // params ['id=1', 'id=2', 'id=3'] => join('&') => id=1&id=2&id=3 => + '?' => ?id=1&id=2&id=3
                const param = '?' + this.state.pollData.movieIds.map((i, key) => {
                    return `id=${i}`;
                }).join('&');

                console.log(param);

                service.getMovie(param).then((movieData) => {
                    this.setState({
                        movieData: movieData.data
                    });
                });
            });
        });
    }

    toggleModal(selectedData) {
        this.setState({ 
            selectedData: selectedData,
            toggleModal: !this.state.toggleModal,
         });
    }

    setVote(pollId, movieId, name) {
        service.postVote(pollId, movieId, name).then((res) => {
            this.toggleModal();
            this.props.history.push(`/result/${pollId}`);
        });
    }
    
    render() {
        const pollId = this.props.match.params.id;
        
        return (
            <section className="PollItem MoviePolls__section">
                <h2 className="PollItem__title">{this.state.pollData.title}</h2>
                <Link className="button__result" to={`/result/${pollId}`}>View Result</Link>

                <div className="PollItem__MovieList">
                    {this.state.movieData.map((i, key) => {
                        return <MovieItem data={i} key={key} toggleModal={this.toggleModal}/>
                    })}
                </div>
                {this.state.toggleModal ? (
                    <ModalWrap setVote={this.setVote} toggleModal={this.toggleModal} pollData={this.state.pollData} selectedData={this.state.selectedData} />
                ) : ``}
            </section>
        );
    }
};

export default PollItem;