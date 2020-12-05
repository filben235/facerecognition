import React from 'react';
import './Navigation.css';

const Navigation = ({toggleTheme, onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav>
                <p id='switch-button' className='f5 link dim pointer' 
                    onClick={toggleTheme}>
                    Switch theme
                </p>
                <p id='signout-button' className ='f5 link dim pointer' onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <p 
                    id='switch-button' 
                    className='f5 link dim pointer' 
                    onClick={toggleTheme}>
                    Switch theme
                </p>
                <p id='signout-button' className ='f5 link dim pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
                <p id='signout-button' className ='f5 link dim pointer' onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        );
    }
}

export default Navigation;