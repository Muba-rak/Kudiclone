import React from "react"
import './Section6.css'
import Lastlogo from './images/Kudilogo.png'
import Location from './images/iconlocation.svg'
import Email from './images/iconemail.svg'
const Section6 = () => {
    return (
        <div className='section6'>
            <div className="kudi">
                <img src= {Lastlogo} alt='logo' />
                <p>The program is one which rewards users for delivering on certain tasks the company allots.</p>

            </div>
            <div className="address">
                <h1>Address</h1>
                <br />
                <p><img src={Location} alt="" /> For complaints and question, kindly contact us through the email links below:</p>
                <br />
                <p><img src={Email} alt='' /> hello@kudi.com <br /></p>
                <span>skype: kudi</span>

            </div>
            <div className="aboutus">
                <h1>About Us</h1>
                <br />
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                </ul>


            </div>
            <div className="resources">
                <h1>Resources</h1>
                <br />
                <ul>
                    <li>How it works</li>
                    <li>Affliate</li>
                    <li>Coupon Vendors</li>
                    <li>FAQs</li>

                </ul>

            </div>
           
        </div>
    )
} 

export default Section6