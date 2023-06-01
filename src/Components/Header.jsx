import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className='nav_container'>
        <div className='nav-left'>
            <h2>LOGO</h2>
        </div>
        <div className='nabar_container'>
            <ul className='nav-menu'>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Menu">MENU</a></li>
                <li><a href="/Order">ORDER</a></li>
                <li><a href="/Contact">CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;