import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap } from './components';
import * as service from './services/post';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            pollTitle: '',
            movieInfo: []
        }
    }
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    componentDidMount() {
        this.fetchPollInfo(1);
        this.fetchMovieInfo();
    }

    fetchPollInfo = async (pollId) => {
        const poll = await service.getTitle(pollId);
        const pollTitle = poll.data.title;

        this.setState({
            pollTitle
        });
    }

    fetchMovieInfo = async (movieId) => {
        const movieInfoObj = await service.getMovie();
        const movieInfo = movieInfoObj.data;

        this.setState({
            movieInfo
        });
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Header pollTitle={this.state.pollTitle}/>
                    <MovieWrap movieInfo={this.state.movieInfo}
                    />
                </Wrapper>
            </div>
        );
    }
}

export default App;