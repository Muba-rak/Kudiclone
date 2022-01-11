import React from 'react'
import './Section4.css'
import Lady2 from './images/Lady2.png'

const Section4 = () => {
    return (
        <div className='section4'>
            <div className='approach'>
                <h1>Our Approach</h1>
                <h4>The program rewards users for delivering on certain tasks</h4>
            </div>
            <div className='text-grid4'>
                <div className='lady_img'>
                    <img src= {Lady2} alt='' />
                </div>
                <div className='maintextside'>
                    <p className='maintextside_p' >Kudi.com provides people with opportunity to 
                        take advantage of the internet and turn our 
                        everyday social media into a tool for making passive income.</p>
                        <div>
                        <div class="grid-2">
                            <div className='boxdiv'>
                                <h5>Membership</h5>
                                <p>Signup to join Kudi for online opportunity that pays.</p>
                            </div>
                            <div className='boxdiv'>
                                <h5>Choose a package</h5>
                                <p>Select subscription packages. They’re proportional to the wages earned by subscribers.</p>    
                            </div>
                            <div className='boxdiv'>
                                <h5>Share ADs</h5>
                                <p>What you do as an affliate is to share these ADs to your Facebook page daily and get paid.</p>
                            </div>
                            <div className='boxdiv'>
                                <h5>Get Paid</h5>
                                <p>Your activity earning will increase based on the package you are on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Section4
