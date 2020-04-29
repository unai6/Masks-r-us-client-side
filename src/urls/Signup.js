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
      <div className='signup-div background-image-signup' style={{height:'100vh'}} >
        <h1 className=' signup-h1 p-2'>Sign Up</h1>
        <p className='signup-p'><b>Already have account?</b></p>
        <Link to={"/login"}><b><p className='linkToLogin-signup'>Login</p></b> </Link>
        <form className='form-container form-group col-sm-12 d-table p-5 mx-auto w-100 col-lg-6' onSubmit={this.handleFormSubmit}>
        
        {this.state.errorMessage ? <p >{this.state.errorMessage}</p> : null}

          <input className="form-control mb-3"
          id="formGroupExampleInput"
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder=' Email @'
          />

        
          <input className="form-control mb-3"
          id="formGroupExampleInput2"
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
          />

          <input className="form-control mb-3"
          id="formGroupExampleInput3"
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm password'
          />

          <input className="form-control"
          id="formGroupExampleInput4"
            type='text'
            name='shippingAddress'
            value={shippingAddress}
            onChange={this.handleChange}
            placeholder='Shipping Address'
          />


          <input className="btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3" type='submit' value='Signup' />
        </form>

      </div>
    );
  }
}

export default needAuth(Signup);
