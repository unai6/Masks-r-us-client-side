import React, { Component } from "react";
import { needAuth } from "../lib/Auth-provider";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../CSS/auth.css'
import {Link} from 'react-router-dom'

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
    this.props.history.push('/user')
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='signup-div background-image-login'>
        <h1 className=' signup-h1'>Login</h1>

        <form className='form-container' onSubmit={this.handleFormSubmit}>
        
          <input
            className ='input-email-login'
            type='email'
            name='email'
            placeholder='Email @'
            value={email}
            onChange={this.handleChange}
          />

         
          <input
            className ='inputs-signup'  
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={this.handleChange}
          />

          <input className ='submit-btn-signup' type='submit' value='Login' />
          
        </form>
        <p className='signup-p'>Don't have an account??</p>
        <Link className='linkToLogin-login' to={"/signup"}> Signup</Link>
      </div>
    );
  }
}

export default needAuth(Login);
