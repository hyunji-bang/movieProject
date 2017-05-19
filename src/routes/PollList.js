import React from 'react';
import { Route, Link } from 'react-router-dom';

const PollList = () => {
    return (
        <section className="MoviePolls__PollList MoviePolls__section">
            <h2>Current Polls</h2>
            <ul className="MoviePolls__PollList__navi">
                <li><Link to="/moviepolls">Movie Polls</Link></li>
            </ul>
        </section>
    );
};
export default PollList;
