import React from 'react'
import './AllStyles/Navbar.scss'


const Navbar = () => {
    return (
        <div className='allNav'>
            
            <nav className='navbar'>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">VIDEO</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">BLOG</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
