import React, { Component } from 'react'

export default class Signup extends Component {



  render() {
    return (
               <div className="container">
                 <h3 className="center"> User Registration</h3>
                <div className="input-field col s6">
                 <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                <label for="first_name">Name</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Placeholder" id="Email" type="email" class="validate"/>
                <label for="Email">Email</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Placeholder" id="Email" type="password" class="validate"/>
                <label for="password">password</label>
                </div>
                <div className="center">
               <a href="/"  className="btn center-align">Sign Up</a>

       </div>
            </div>
            
    )
  }
}
