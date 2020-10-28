import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL}) => {
  return(
    <div>
      <img src={imageURL} alt='the submitted thingy' id='submitted-image'/>
    </div>
  );
}


export default FaceRecognition;