import React from 'react';

const Header = (props) => (
    <header>
        <h1 className="MoviePolls__Title">{props.pollTitle}</h1>
    </header>
)

export default Header;