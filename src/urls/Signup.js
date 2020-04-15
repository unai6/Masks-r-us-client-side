import React from "react";
import { Link } from "react-router-dom";
import { needAuth } from "../lib/Auth-provider";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../CSS/auth.css'


class Signup extends React.Component {
  
  state = { email: "", password: "", confirmPassword: '', shippingAddress: '', errorMessage:''};
  
  
  handleFormSubmit = (event) => {
    event.preventDefault();   
    const { email, password, confirmPassword, shippingAddress} = this.state;
    if(email === '' || password=== '' || confirmPassword === '' || shippingAddress === ''){
      this.setState({
        errorMessage: 'Fill the gaps'
      })
      console.log(this.state.errorMessage)
    } else {
      
      this.props.signup({ email, password, confirmPassword, shippingAddress});
      //console.log(this.props.signup)

    }

  
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };


  render() {
    const { email, password, confirmPassword, shippingAddress} = this.state;
    
    return (
      <div className='signup-div background-image-signup' >
        <h1 className=' signup-h1'>Sign Up</h1>
        <form className='form-container' onSubmit={this.handleFormSubmit}>
        
        {this.state.errorMessage ? <p >{this.state.errorMessage}</p> : null}

          <input className ='inputs-signup' 
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder=' Email @'
          />

        
          <input className ='inputs-signup'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
          />

          <input className ='inputs-signup'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm password'
          />

          <input className ='inputs-signup'
            type='text'
            name='shippingAddress'
            value={shippingAddress}
            onChange={this.handleChange}
            placeholder='Shipping Address'
          />


          <input className ='submit-btn-signup' type='submit' value='Signup' />
        </form>

        <p className='signup-p'>Already have account?</p>
        <Link className='linkToLogin-signup' to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default needAuth(Signup);
