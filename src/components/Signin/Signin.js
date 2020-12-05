import React from 'react';
import './Signin.css';

const Signin = ({onRouteChange}) => {
  return(
    <div className='center'>
      <form id='sign-in-form' className='br4'>
        <p className='f2'>Sign in</p>
        <div id='email-box'>
          <p className='f6'>Email</p>
          <input id='email-input' type='email' name='email-adress'/>
        </div>
        <div id='password-box'>
          <p className='f6'>Password</p>
          <input id='password-input' type='password' name='password'/>
        </div>
        <div id='sign-in-up'>
          <input 
            type='submit' 
            onClick={ () => onRouteChange('home')}
            value='Sign in' 
            className='pointer br2'
          />
          <p onClick={ () => onRouteChange('register')} className='pointer black'>Create account</p> 
        </div>
      </form>
    </div>
  );
}

export default Signin;