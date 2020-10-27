import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange}) => {
    return (
        <div className="container">
            <p className='f2 white-80'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center form'>
                <input className='f4 pa2 w-70 center b--none' type='text' placeholder='enter a url' onChange={onInputChange}/>
                <button className='w-30 f4 link ph3 pv2 dib bg-yellow dark-gray b--none'>detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;