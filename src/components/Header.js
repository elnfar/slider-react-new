import React from 'react'
import logo from './assets/side.png'
import Navbar from './Navbar'
import './AllStyles/Header.scss'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
    return (
        <div>
        <div className='allBody'>
            <img src='https://alurolls.ca/wp-content/uploads/2020/10/Aluroll_web-2.png' alt='header-logo' className='logo'/>
            <div className='inputLogo'>
            <input type="text" placeholder='Search something' className='inp'/>
            <FaSearch className='icon-search'/>
            </div>
        </div>
        <Navbar/>
        </div>
    )
}

export default Header
