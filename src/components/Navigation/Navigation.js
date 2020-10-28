import React from 'react';
import './Navigation.css';

const Navigation = ({toggleTheme}) => {
    return (
        <nav>
            <p id='switch-button' className='f5 link dim pointer' 
                onClick={toggleTheme}>
                Switch theme
            </p>
            <p id='signout-button' className ='f5 link dim pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;