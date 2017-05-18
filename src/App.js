import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap, ModalWrap } from './components';
import * as service from './services/post';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            pollTitle: '',
            movieInfo: [],
            modalVisible: false,
            selectedData: {}
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(data) {
        //console.log(data);
        this.setState({ modalVisible: !this.state.modalVisible, selectedData: data});
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

    fetchMovieInfo = async () => {
        const movieInfoObj = await service.getMovie();
        const movieInfo = movieInfoObj.data;

        this.setState({
            movieInfo
        });
    }

    sendVote = async (pollId, movieId) => {
        console.log(pollId, movieId);
        const vote = await service.postVote(pollId, movieId);
        //console.log(vote);
    }

    render() {
        return (
                <Wrapper>
                    <Header pollTitle={this.state.pollTitle}/>
                    <MovieWrap movieInfo={this.state.movieInfo} 
                               toggleModal={this.toggleModal} />
                    {this.state.modalVisible ? <ModalWrap movieInfo={this.state.movieInfo} 
                                                        toggleModal={this.toggleModal} 
                                                        selectedData={this.state.selectedData}
                                                        sendVote={this.sendVote}/> : ""}
                </Wrapper>
        );
    }
}

export default App;