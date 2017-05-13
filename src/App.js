import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap } from './components';
import * as service from './services/post';

class App extends Component {
    fetchPostInfo = async (pollId) => {
        const poll = await service.getTitle(pollId);
        console.log(poll);
    }

    componentDidMount() { // 데이터 불러오기
        this.fetchPostInfo(1);
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Header/>
                    <MovieWrap/>
                </Wrapper>
            </div>
        );
    }
}

export default App;