import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap } from './components';
import * as service from './services/post';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            pollTitle: '',
            movieTitle: ''
        }
    }
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    componentDidMount() {
        this.fetchPollInfo(1);
        this.fetchMovieInfo(1);
    }

    fetchPollInfo = async (pollId) => {
        const poll = await service.getTitle(pollId);
        const pollTitle = poll.data.title;

        console.log(pollTitle);
        this.setState({
            pollTitle
        });
    }

    fetchMovieInfo = async (movieId) => {
        const movie = await service.getMovie(movieId);
        const movieTitle = movie.data.title;

        console.log(movieTitle);
        this.setState({
            movieTitle
        });
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Header pollTitle={this.state.pollTitle}/>
                    <MovieWrap movieTitle={this.state.movieTitle}/>
                </Wrapper>
            </div>
        );
    }
}

export default App;