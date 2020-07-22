import React, { Component } from 'react'

export default class Login extends Component {


  render() {
    return (
        <div className="container">
        <h3 className="center"> User Login</h3>
       <div className="input-field col s6">
        <input placeholder="Placeholder" id="Email" type="email" class="validate"/>
       <label for="Email">Email</label>
       </div>
       <div className="input-field col s6">
        <input placeholder="Placeholder" id="Email" type="password" class="validate"/>
       <label for="password">password</label>
       </div>
       <div className="center">
       <a href="/"  className="btn center-align">login</a>
       <p className="flow-text"> No account?</p>
       <a href="/Signup">Register</a>
       </div>
       
   </div>
   
    
    )
  }
}
