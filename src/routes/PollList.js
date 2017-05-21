import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as service from '../services/post';


class PollList extends Component { 
    constructor(props) { 
        super(props); 

        this.state = {
            pollInfo: []
        }
    }

    componentWillMount() {
        this.fetchPollInfo();
    }

    fetchPollInfo = async () => {
        const pollInfoObj = await service.getPoll();
        const pollInfo = pollInfoObj.data;
        // console.log('pollInfo:', pollInfo);

        this.setState({
            pollInfo
        });
    }

    render(){
        return (
            <section className="PollList MoviePolls__section">
                <h2>Current Polls</h2>
                {console.log('this.state.pollInfo :', this.state.pollInfo)}
                <ul className="PollList__navi">
                    {/*<li><Link to="/pollitem">{props.pollTitle}</Link></li>*/}
                    {this.state.pollInfo.map((i, key) => {
                        return  <li key={key}>
                                    <Link to={`/poll/${i.id}`}>{i.title}</Link>
                                </li>
                    })}
                </ul>
            </section>
        );
    };
}

export default PollList;
