import React from 'react'
import './Footer.css'
import Apple from './images/iconapple.svg'
import Play from './images/icongoogleplay.svg'




const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <div>
                    <p>Follow Us:</p>
                </div>
                <div>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
            <div className='footer_right'>
                <div className='store'>
                <div>
                        <img src= { Apple } alt='' />
                    </div>
                    <div>
                        <p>Download on the</p>
                        <h4>App Store</h4>
                    </div>
                    
                </div>
                <div className='store'>
                    <div>
                        <img src= { Play } alt='' />
                    </div>
                    <div>
                        <p>Download on the</p>
                        <h4>Play Store</h4>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright@2021 Mubarak</p>

            </div>
            
        </div>
    )
}

export default Footer
