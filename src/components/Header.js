import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1 className="MoviePolls__title">Movie Polls</h1>
            <ul className="MoviePolls__Menu">
                <li className="MoviePolls__Menu__item"><Link to="/">Poll List</Link></li>
                <li className="MoviePolls__Menu__item"><Link to="/newpoll">Make a New Poll</Link></li>
            </ul>
        </header>
    )
}

export default Header;