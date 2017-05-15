import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1 className="MoviePolls__title">{props.pollTitle}</h1>
        </header>
    )
}

export default Header;