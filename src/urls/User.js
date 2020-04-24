import React, { Component } from "react";
import { needAuth } from "../lib/Auth-provider";
import { Link } from 'react-router-dom'
import '../CSS/user-profile.css'

class User extends Component {

  state= {
    email: this.props.email,
    shippingAddress: this.props.shippingAddress
  }

  render() {
    //  console.log(this.props)
    return (
      <div className='background-color'>
        <div className="col-sm-12 mx-auto">
          <div className='col-sm-12 h-100 d-table'>
            <div className="card-container col-md-12 col-lg-6 mx-auto text-center card card-block " style={{ height: '40vh', lineHeight:'5' }}>
              <form className="form-group col-sm-12 d-table">
                <div>
                  <p> Hi, <b>{this.props.user.email}</b></p>

                  <input type="text" className="form-control" id="formGroupExampleInput"  value= {this.props.user.email} />
                </div>
                <div className="form-group">

                  <input type="text" className="form-control" id="formGroupExampleInput2" value={this.props.user.shippingAddress}/>
               
                </div>
          <Link to={`/user/${this.props.user._id}/edit-profile`}> <button type="button" className="btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3">Edit Profile</button></Link>
          <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light
          " onClick={this.props.logout}>Log out</button>
              </form>
            </div>
          </div>
        </div>
        <div className=" col-md-4 text-center" role="group" aria-label="Basic example">
        </div>
        <div class="col-md-4 text-center">
        </div>
      </div>

    );
  }
}

export default needAuth(User);
