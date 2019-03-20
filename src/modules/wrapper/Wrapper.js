import React from 'react';
import './wrapper.css';

const Wrapper = (props) => (
    <div className="Wrapper">
        {props.children}
    </div>
);

export default Wrapper;
