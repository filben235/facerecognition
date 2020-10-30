import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, facePercent}) => {
  return(
    <div>
      <img src={imageURL} alt=''/>
      <div>
        <p>{facePercent}</p>
      </div>
    </div>
  );
}


export default FaceRecognition;