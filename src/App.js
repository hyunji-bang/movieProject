import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Wrapper, Header, MovieWrap, ModalWrap } from './components';
import * as service from './services/post';

import PollList from './routes/PollList';
import NewPoll from './routes/NewPoll';
import MoviePolls from './routes/MoviePolls';

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

    render() {
        return (
            <Router>
                <Wrapper>
                    <Header/>
                    <Route exact path="/" component={PollList}></Route>
                    <Route path="/moviepolls" component={MoviePolls}/>
                    <Route path="/newpoll" component={NewPoll}/>
                </Wrapper>
            </Router>
        );
    }
}

export default App;