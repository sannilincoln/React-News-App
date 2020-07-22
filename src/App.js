
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News'
import Navbar from './components/Navbar'
 //import Welcome from './components/Welcome'
 import Signup from './components/Signup'
import Login from './components/Login'
import NewsUpload from './components/NewsUpload';
import Readme from './components/Readme';


class App extends Component {
 
      
      
  render() {
    return (
            <BrowserRouter>
        <div className='App'>
        {/* <Route path="/" component={Welcome}/> */}
        <Route path="Singup" component={Signup}/>
        <Navbar/>
        
        <Route  exact path="/" component={News}/>
        <Route path="/Login" component={Login}/>
        <Route path="/NewsUpload" component={NewsUpload}/>
        <Route path="/Readme" component={Readme}/>
        <Route path="/Signup" component={Signup}/>
        
      </div>
            </BrowserRouter>
      
   
      
    );
  }
}

export default App;