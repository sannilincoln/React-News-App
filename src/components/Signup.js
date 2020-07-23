import React, { Component } from 'react'

export default class Signup extends Component {

                state = {
                  name: '',
                  email: '',
                  password:''
                }

                  handleSignUp =(e) =>{
                    const nam = e.target.name;
                    const val = e.target.value;
                    this.setState({[nam]: val});
                   
                  }
                  handleSubmit = (e) =>{
                    const { name ,email, password}= this.state;
                    localStorage.setItem('email',email)
                    localStorage.setItem('password',password)
                    localStorage.setItem('name',name)
                    alert('successful! please log in');
                   
                  }

  render() {
    return (
               <div className="container">
                 <h3 className="center"> User Registration</h3>
                  <form action="/Login" onSubmit={this.handleSubmit}>
                  <div className="input-field col s6">
                 <input name='name' onChange={this.handleSignUp} id="name" type="text" className="validate"/>
                <label for="name">Name</label>
                </div>
                <div className="input-field col s6">
                 <input name='email' onChange={this.handleSignUp} id="email" type="email" className="validate"/>
                <label for="email">Email</label>
                </div>
                <div className="input-field col s6">
                 <input name='password' onChange={this.handleSignUp} id="Email" type="password" className="validate"/>
                <label for="password">password</label>
                </div>
                <div className="center">
                <button  type="submit" className="btn red darken-3">Sign up</button>
             </div>
                  </form>
            </div>
            
    )
  }
}
