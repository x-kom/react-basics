import React from 'react';
import './NoMatch.css';

const NoMatch = () => (
    <div className="NoMatch">
        <div className="NoMatch__errorCode">404</div>
        <h2 className="NoMatch__header">Oops, an error has occurred. Page not found!</h2>
    </div>
);

export default NoMatch;
