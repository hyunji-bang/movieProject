import React from 'react';

const Wrapper = (props) => {
    return (
        <div className="MoviePolls">
             {props.children}
        </div>
    );
};

/* 방법2

const Wrapper = ({ children }) => {
    return (
        <div className="Wrapper">
             {children}
        </div>
    );
};

*/

export default Wrapper;