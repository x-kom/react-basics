import React from 'react';
import './Header.css';

const Header = ({ children }) => (
    <div className='Header'>
        <div className='Header__Content'>
            {children}
        </div>
    </div>
);

export default Header;
