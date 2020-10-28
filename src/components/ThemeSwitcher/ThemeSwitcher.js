import React from 'react';

const ThemeSwitcher = ({toggleTheme}) => {
  return(
    <button id='switch-button' onClick={toggleTheme}>
      Switch theme
    </button>
  )
}

export default ThemeSwitcher;