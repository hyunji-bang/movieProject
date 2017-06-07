import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Wrapper, Header, MovieWrap, ModalWrap } from './components';
import * as service from './services/post';

import PollList from './routes/PollList';
import PollItem from './routes/PollItem';
import NewPoll from './routes/NewPoll';
import Result from './routes/Result';
import NoMatch from './routes/Nomatch';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Wrapper>
                    <Header/>
                    <Switch>
                        <Route exact path="/"
                            render={(props) => <PollList {...props}/>}/>
                        <Route path="/poll/:id" 
                            render={(props) => <PollItem {...props} 
                                                toggleModal={this.toggleModal} 
                                                />} />
                        <Route path="/newpoll" 
                            render={(props) => <NewPoll {...props} 
                                                sendPollInfo={this.sendPollInfo}/>} />
                        <Route path="/result/:id" render={(props) => <Result {...props} />}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Wrapper>
            </Router>
        );
    }
}

export default App;