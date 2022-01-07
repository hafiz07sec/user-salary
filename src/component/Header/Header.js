import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/Home">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/Bio">Bio</a>
            </nav>
            
        </div>
    );
};

export default Header;