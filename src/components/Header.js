import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1 className="MoviePolls__title"><NavLink to="/">Movie Polls</NavLink></h1>
            <ul className="MoviePolls__Menu">
                <li className="MoviePolls__Menu__item"><NavLink exact to="/" activeClassName="active">Poll List</NavLink></li>
                <li className="MoviePolls__Menu__item"><NavLink exact to="/newpoll" activeClassName="active">Make a New Poll</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;