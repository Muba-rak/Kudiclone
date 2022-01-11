import React from 'react'
import './Navbar.css'
import Logo from './images/Kudilogo.png'


const Navbar = () => {
    let url = ''
    return (
        <div className='Navbar'>
            <img src= { Logo } alt='' />
            <div className='link'>
                <a href= {url}>Home</a>
                <a href= {url}>About Us</a>
                <a href= {url}>How it Works</a>
                <a href= {url}>Affliate</a>
                <a href= {url}>Coupon Vendor</a>
                <a href= {url}>FAQs</a>
                <a href= {url}>Contact</a>
                <div className='linkbuttons'>
                    <button id='loginbtn'>Login</button>
                    <button id='getstartedbtn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
