import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brainlogo from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt shadow-2" id='logo' 
                options={{
                max : 25,
                easing: 'cubic-bezier(.03,.98,.52,.99)' 
                }} 
                style={{
                    height: 90, 
                    width: 90
                }} >
                <div className="Tilt-inner"> 
                    <img src={brainlogo} alt='our logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;