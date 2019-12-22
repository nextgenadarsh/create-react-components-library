import React from "react";
// import './say-hello.css';

const SayHello = props => {
    const { name } = props;
    return (
        <div className="hello-message">
            Hello {name}!
        </div>
    );
};

export default SayHello;