import React from 'react';
import '../assets/css/header/header.css';

function Header(props) {
    return (
        <div className="header"> 
            <a href="/">Home</a>
            <a href="/listing">Listing</a>
            <a href="/about">About Us</a>
            <a href="/terms">Terms & conditions</a>
        </div>
    );
}

export default Header;