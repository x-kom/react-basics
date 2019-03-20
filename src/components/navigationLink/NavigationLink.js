import React from 'react';
import Link from '../link/Link';
import Icon from '../icon/Icon';
import './NavigationLink.css';

const NavigationLink = ({
    to,
    iconType,
    children,
}) => (
    <>
        <Link to={to} className="NavigationLink"><Icon type={iconType} />{' '}{children}</Link>
    </>
);

export default NavigationLink;
