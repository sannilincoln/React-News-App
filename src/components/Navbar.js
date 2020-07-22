import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Latest News</a>
                <ul className="right">
                    <li><a href="/NewsUpload">News Upload</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Readme">Read Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;