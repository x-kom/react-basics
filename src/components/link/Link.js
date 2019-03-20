import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({
    to,
    title,
    children,
    className = ''
}) => (
    <RouterLink to={to} className={className} title={title}>
        {children}
    </RouterLink>
);

export default Link;
