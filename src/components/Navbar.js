import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';




export default class Navbar extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#mobile-links');
        M.Sidenav.init(sidenav, {});
      }
  render() {
    return (
        <div>

        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Latest News</a>
                <a href="#" className="sidenav-trigger" data-target="mobile-links">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/NewsUpload">News Upload</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Readme">Read Me</a></li>
                </ul>
            </div>
        </nav>  
        <ul className="sidenav " id="mobile-links">
        <li><a href="/NewsUpload">News Upload</a></li>
         <li><a href="/Login">Login</a></li>
         <li><a href="/Readme">Read Me</a></li>
            </ul>      
    
        </div>      
    )
  }
}
