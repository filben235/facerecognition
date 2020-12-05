import React from 'react';
import './Register.css';

const Register = ({onRouteChange}) => {
  return(
    <div className='center'>
      <form id='sign-in-form' className='br4'>
        <p className='f2'>Create an account</p>
        <div id='name-box'>
          <p className='f6'>Name</p>
          <input id='email-input' type='name' name='name'/>
        </div>
        <div id='email-box'>
          <p className='f6'>Email</p>
          <input id='email-input1' type='email' name='email-adress'/>
        </div>
        <div id='password-box'>
          <p className='f6'>Password</p>
          <input id='password-input1' type='password' name='password'/>
        </div>
        <div id='sign-in-up'>
          <input 
            type='submit' 
            onClick={ () => onRouteChange('home')} //this syntax so it doesn't run on render
            value='Register' 
            className='pointer br2'
          />
        </div>
      </form>
    </div>
  );
}

export default Register;