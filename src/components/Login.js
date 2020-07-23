import React, { Component } from 'react'

export default class Login extends Component {

              state={
                email: "",
                password: ""
              }

        handleLogin=(e)=>{
            const nam = e.target.name;
            const val = e.target.value;
            this.setState({[nam]: val});
        }
        
        handleSubmit =(e)=>{
          const { email, password}= this.state;
          localStorage.setItem('email',email)
          localStorage.setItem('password',password)
         alert('logged in');
        }

  render() {
    return (
        <div className="container">
        <h3 className="center"> User Login</h3>
        <form action="/" onSubmit={this.handleSubmit} >
        <div className="input-field col s6">
        <input  name="email" type="email" onChange={this.handleLogin} className="validate"/>
       <label for="email" >Email</label>
       </div>
       <div className="input-field col s6">
        <input  name='password' onChange={this.handleLogin} type="password" className="validate"/>
       <label for="password">password</label>
       </div>
       <div className="center">
        <button  type="submit" className="btn red darken-3">Login</button>
       <p className="flow-text center"> No account?</p>
       <a href="/Signup">Register</a>
       </div>
        </form>
      
       
   </div>
   
    
    )
  }
}
