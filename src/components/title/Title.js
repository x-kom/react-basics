import React from 'react';
import './Title.css';

const Title = ({ title, infoText }) => (
    <div className="Title">
        {title}
        {infoText && (
            <span className="Title__InfoText">
                {infoText}
            </span>
        )}
    </div>
);

export default Title;
