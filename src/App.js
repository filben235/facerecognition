import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
//Theme stuff
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/Themes/theme.js';
import { GlobalStyles } from './components/Themes/global.js';
//Components
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'


const app = new Clarifai.App({
  apiKey: 'c8591ccc1ded4d23abf2c7e37f7fd5ba'
});

//settings for the particle background
const particleOptions = {
  "particles": {
      "number": {
          "value": 150
      },
      "size": {
          "value": 1
      },
      "color": {
        "value": '#fff'
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
      input: '',
      imageURL: '',
      theme: 'light',
    }
  }

  //toggles the theme at the press of the Switch theme button
  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState((state) => {
        return {theme: 'dark'}
      });
    } else {
      this.setState((state) => {
        return {theme: 'light'}
      });
    }
  }

  //gets called when the input is changed
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  //gets called when the submit button is clicked
  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(function(response) {
      console.log(response.outputs[0].data.regions[0].data.concepts[0].value,
        response.outputs[0].data.regions[0].region_info.bounding_box);
    })
    .catch(function(error){
      console.log(error);
    })
  }

render(){  
  return (
    <div className="App">
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        {/*Applies the global CSS properties found in global.js*/}
        <GlobalStyles/>
        <Particles className='particles'
          params={particleOptions}
        />
        <Navigation toggleTheme={this.toggleTheme}/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </ThemeProvider>
    </div>
  );
  }
}

export default App;
