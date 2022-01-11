import React from 'react'
import './Section2.css'
import Sec from './images/Sec.svg'
import Sec2 from './images/Sec2.svg'


const Section2 = () => {
    return (
        <div className='section2'>
            <h1>How to earn with Kudi?</h1>
            <div className='All'>
                <div className='text-sec'>
                    <img src= {Sec} alt='' />
                    <div className='smalldiv'>
                        <h5>Affliate</h5>
                        <p>What you do as an affliate is to share these ADs to your Facebook page daily and get paid 
                            based on your activities and package.</p>
                    </div>
                </div>
                <div className='text-sec'>
                    <div>
                        <img src= {Sec2} alt='' />
                    </div>
                    <div className='smalldiv'>
                        <h5>Referer</h5>
                        <p>On kudi.com we reward every member's hard work; Each package on has its own referral bonus.</p>
                    </div>
                </div>
                <div className='text-sec'>
                    <img src= {Sec} alt='' />
                    <div className='smalldiv'>
                        <h5>Membership</h5>
                        <p>Practically anyone can be a member Kudi.com as all you need is an internet enabled device.</p>
                    </div>
                </div>

            </div>


            
        </div>
    )
}

export default Section2
