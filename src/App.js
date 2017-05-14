import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap, ModalWrap } from './components';
import * as service from './services/post';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            pollTitle: '',
            movieInfo: [],
            visibility: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ visibility: !this.state.visibility });
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
                <Wrapper>
                    <Header pollTitle={this.state.pollTitle}/>
                    <MovieWrap movieInfo={this.state.movieInfo} 
                               toggleModal={this.toggleModal} />
                    {this.state.visibility ? <ModalWrap toggleModal={this.toggleModal}/> : ""}
                </Wrapper>
        );
    }
}

export default App;