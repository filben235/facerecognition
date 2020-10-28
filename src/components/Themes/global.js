//sets global css variables, variables for dark/light theme is located in theme.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.gradient};
  }
  
  body, html {
    height: 100%;
  }
  
  .App {
    text-align: center;
  }
  
  .center {
    display: flex;
    justify-content: center;
  } 
  
  //positions the particle effect behind all other content
  .particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  //sets color for logo and submit-button
  #submit-button, .Tilt {
    background-color: ${({ theme }) => theme.accentColor};
  }

  //sets the text color of all main text
  .text {
    color: ${({ theme }) => theme.textNormal};
  }

  //sets color of the signout and switch theme buttons
  #signout-button, #switch-button {
    color: ${({ theme }) => theme.textMuted};
  }
`;