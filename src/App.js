import React, {Component, useState} from 'react';
import './App.css';
import Particles from 'react-particles-js';
//Theme stuff
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/Themes/theme.js';
import { GlobalStyles } from './components/Themes/global.js';
//Components
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.js'

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
      theme: 'light',
    }
  }

  
  toggleTheme = () => {
    if (this.state.theme === 'light') {
      console.log('switched to dark');
      this.setState((state) => {
        return {theme: 'dark'}
      });
      // this.state.theme='dark';
    } else {
      console.log('switched to light');
      this.setState((state) => {
        return {theme: 'light'}
      });
      // this.state.theme='light';
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

render(){  
  return (
    <div className="App">
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Particles className='particles'
          params={particleOptions}
        />
        <Navigation/>
        <ThemeSwitcher toggleTheme={this.toggleTheme}/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition/>*/}
      </ThemeProvider>
    </div>
  );
  }
}



export default App;
