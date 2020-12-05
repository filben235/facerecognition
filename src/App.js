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
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';


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
      facePercent: '',
      route: 'signin',
      isSignedIn: false,
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

  //same as vanilla toFixed, just without the rounding
  toFixedImproved(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }

  handlePercent = (response) => {
    //converts to percent with 3 decimals + adds %
    let fixedResponse = `The chance is ${((this.toFixedImproved(response, 5))*100).toString()}% that this is a human face`;
    this.setState({facePercent: fixedResponse});
  }


  //gets called when the submit button is clicked
  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.handlePercent(response.outputs[0].data.regions[0].data.concepts[0].value))
    .catch(function(error){
      console.log(error);
    })
  }

  //keeps track of what parts of the page to display
  onRouteChange = (data) => {
    //will only be true at the start and after pressing sign out button
    if (data === 'signin') {
      this.setState({isSignedIn: false})
      //will be true if the home screen is open (after clicking signin/register)
    } else if (data === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: data});
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
        <Navigation 
          isSignedIn={this.state.isSignedIn}
          toggleTheme={this.toggleTheme}
          onRouteChange={this.onRouteChange}
        />
        <Logo/>
        { this.state.route === 'home'
          ? <div>
              <Rank/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition 
                imageURL={this.state.imageURL}
                facePercent={this.state.facePercent}
              />
            </div>
          : (
              this.state.route ==='signin' 
              ? <Signin onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            ) 
        }
      </ThemeProvider>
    </div>
  );
  }
}

export default App;
