import React from "react";
import { needAuth } from "../lib/Auth-provider";
import { Link } from 'react-router-dom'
import '../CSS/user-profile.css'
import ApiService from "../lib/service";

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {}

  }

  handleFormSubmit = event => {
    event.preventDefault();

    const { email, password, shippingAddress } = this.state;
    const id = this.props.user._id
    ApiService.edit_profile(id, email, password, shippingAddress).then(response => {
        this.setState({
          state:response
        })
    })
    this.props.history.push('/user')
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
      <div className='background-color row h-100'>
        <div className="col-sm-12 my-auto">
          <div className='col-sm-12 h-100 d-table'>
            <div className="card-container col-md-4 text-center card card-block " style={{ height: '60vh' }}>
              <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card cap" />
              <form className="form-group col-sm-12 d-table" onSubmit={this.handleFormSubmit}>
                <div>
                  <p> Hi, <b>{this.props.user.email}</b></p>

                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="E-mail @"
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">

                  <input
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="New Password"
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                  />


                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Shipping Address"
                    name='shippingAddress'
                    value={shippingAddress}
                    onChange={this.handleChange}
                  />


                </div>
                <input type='submit' value='Submit' />
              </form>
            </div>
          </div>
        </div>
        <div className=" col-md-4 text-center" role="group" aria-label="Basic example">

          <button type="button" className="btn btn-danger" onClick={this.props.logout}>Log out</button>
        </div>
        <div className="col-md-4 text-center">
          <Link to='/'> <button id="singlebutton" name="singlebutton" className="btn btn-primary">Home</button></Link>
        </div>
      </div>

    );
  }
}

export default needAuth(EditProfile);
