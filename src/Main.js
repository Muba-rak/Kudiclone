import React from 'react'
import './Main.css'
import Person from './images/iconperson.svg'
import Basket from './images/iconbasket.svg'
import Lady from './images/Lady.png'


const Main = () => {
    return (
        <div>
            <div className='section1'>
               <div className='section1-text'>
                   <div className='icon'>
                        <p>< img src= { Person } alt='logo' /><span>7,420 Users</span></p> 
                   </div>
                   <br />
                   <div className='icon'>
                        <p><img src= { Basket } alt='logo' /><span>8,908 Investments</span> </p>
                   </div>
                   <br />
                   <p>....richer journey that leads to success</p>
                   <h1>Welcome to Kudi</h1>
                   <p className='largep'>The largest affliate marketing company with the fastest growing subscriber base in Africa</p>
                   <button id='getbtn'>Get Started</button>
               </div>

               <div className='section1-img'>
                    < img src= { Lady } alt='logo' />
               </div>
            </div>
            
        </div>
    )
}

export default Main
