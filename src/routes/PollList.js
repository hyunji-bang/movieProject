import React from 'react';
import { Route, Link } from 'react-router-dom';

const PollList = (props) => {
    return (
        <section className="PollList MoviePolls__section">
            <h2>Current Polls</h2>
            <ul className="PollList__navi">
                <li><Link to="/pollitem">{props.pollTitle}</Link></li>
            </ul>
        </section>
    );
};
export default PollList;
