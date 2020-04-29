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
      <div className='signup-div background-image-login' style={{height:'100vh'}}>
        <h1 className=' signup-h1 p-2'>Login</h1>

        <p className='signup-p'><b>Don't have an account?</b></p>
        <Link to={"/signup"}><b><p className='linkToLogin-signup'>Sign Up</p></b></Link>
        <form className= 'form-container form-group col-sm-12 d-table p-5 mx-auto w-100 col-lg-6' onSubmit={this.handleFormSubmit}>
        
          <input
           className="form-control mb-3" id="formGroupExampleInput"
            type='email'
            name='email'
            placeholder='Email @'
            value={email}
            onChange={this.handleChange}
          />

         
          <input
          className="form-control" id="formGroupExampleInput2" 
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={this.handleChange}
          />

          <input className="btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3" type='submit' value='Login' />
          
        </form>
      </div>
    );
  }
}

export default needAuth(Login);
