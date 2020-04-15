import React, { Component } from "react";
import { needAuth } from "../lib/Auth-provider";
import {Link} from 'react-router-dom'
import '../CSS/user-profile.css'

class User extends Component {
  render() {
  //  console.log(this.props)
    return (
      <div className='background-color row h-100'>
      <div className="col-sm-12 my-auto">
      <div className='col-sm-12 h-100 d-table'>
      <div className="card-container col-md-4 text-center card card-block " style={{height:'60vh'}}>
  <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
        <form className="form-group col-sm-12 d-table">
  <div>
    <p> Hi, <b>{this.props.user.email}</b></p>
    
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="E-mail @"/>
  </div>
  <div className="form-group">
    
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Shipping Address"/>
  </div>
</form>
</div>
</div>
</div>
      <div className=" col-md-4 text-center" role="group" aria-label="Basic example">
 <Link to={`/user/${this.props.user._id}/edit-profile`}> <button type="button" className="btn btn-primary">Edit Profile</button></Link>
  <button type="button" className="btn btn-danger"  onClick={this.props.logout}>Log out</button>
</div>
<div class="col-md-4 text-center"> 
   <Link to='/'> <button id="singlebutton" name="singlebutton" class="btn btn-primary">Home</button></Link> 
</div>
      </div>
   
    );
  }
}

export default needAuth(User);
