import React from "react";
import { needAuth } from "../lib/Auth-provider";
import '../CSS/user-profile.css'
import ApiService from "../lib/service";
import  {Link} from 'react-router-dom'


class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {}

  }

  handleFormSubmit = async event => {
    event.preventDefault();

    const { email, password, shippingAddress } = this.state;
    const id = this.props.user._id
    ApiService.edit_profile(id, email, password, shippingAddress)
     .then(response => { 
       this.setState({
         infoSent:true
       })
      //this.props.history.push('/user')
    })
    console.log(password)
    console.log(shippingAddress);
    console.log(email);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

  };


  render() {
    const { email, shippingAddress, password } = this.state;
    return (
      <div className='background-color'>
        <div className="col-sm-12 my-auto">
      <Link to='/user'><button  className="btn btn-outline-success mt-5">Back to profile</button></Link>
          <div className='col-sm-12 h-100 d-table'>
            <div className="card-container col-md-4 col-lg-6 mx-auto text-center card card-block " style={{ height: '40vh'}}>

              <form className="form-group col-sm-12 d-table" onSubmit={this.handleFormSubmit}>
                <div>
                  <p> Hi, <b>{this.props.user.email}</b></p>

                  <input
                    type="text"
                    className="form-control mb-3"
                    id="formGroupExampleInput"
                    placeholder="E-mail @"
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />

                  <input
                    type="password"
                    className="form-control mb-3"
                    id="formGroupExampleInput2"
                    placeholder="New Password"
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                  />


                  <input
                    type="text"
                    className="form-control mb-3"
                    id="formGroupExampleInput2"
                    placeholder="Shipping Address"
                    name='shippingAddress'
                    value={shippingAddress}
                    onChange={this.handleChange}
                  />


                </div>
                {this.state.infoSent ? <button onClick={() => this.props.history.push('/user')}> Back to Profile </button> : (
               
                <>
                <button className='btn btn-block text-uppercase text-light bg-dark  mt-4' type='submit' value='Submit'>Submit</button>
                <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light" onClick={this.props.logout}>Log out</button>
                </>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className=" col-md-4 text-center" role="group" aria-label="Basic example">

        </div>
        <div className="col-md-4 text-center">
        </div>
      </div>

    );
  }
}

export default needAuth(EditProfile);
