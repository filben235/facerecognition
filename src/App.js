import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';

const particleOptions = {
  "particles": {
      "number": {
          "value": 150
      },
      "size": {
          "value": 1
      },
      "color": {
        "value": "#fff"
      },
      "line_linked": {
        color: '494949',
        opacity: 0.7
      }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      //input will store the users input
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }
render(){  
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions}
      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange}/>
      {/*<FaceRecognition/>*/}
    </div>
  );
  }
}

export default App;
