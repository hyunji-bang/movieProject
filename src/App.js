import React, { Component } from 'react';
import { Wrapper, Header, MovieWrap } from './components';
import * as service from './services/post';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            pollTitle: ''
        }
    }
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    componentDidMount() { 
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async (pollId) => {
        const poll = await service.getTitle(pollId);
        const pollTitle = poll.data.title;
        console.log(pollTitle);
        this.setState({
            pollTitle
        });
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Header title={this.state.pollTitle}/>
                    <MovieWrap/>
                </Wrapper>
            </div>
        );
    }
}

export default App;