import React from 'react'
import { FaYoutube, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdSettings } from "react-icons/io";
import './Footer.css'


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-cta'>


                        <h2><IoMdSettings />GEGSG</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  doloremque fuga aspernatur recusandae facere?

                        </p>
                        <div className='footer-icon'>
                            <a><FaYoutube /></a>
                            <a><FaInstagramSquare /></a>
                            <a><FaXTwitter /></a>
                            <a><FaWhatsappSquare /></a>
                        </div>

                    </div>
                    <div className='footer-ctb'>
                        <h2>Our Hint</h2>
                        <ul>

                            <li><a>About Us</a> </li>
                            <li><a>Term Of Use</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>How Its Work</a></li>
                            <li><a>Contact Us</a></li>

                        </ul>  

                    </div>
                    <div className='footer-ctc'>
                        <div className='cta-primary'>
                            <h2>Support</h2>
                            <ul>
                                <li><a>Support Carrer</a></li>
                                <li><a>24 Hours</a></li>
                                <li><a>Quick Chat</a></li>
                            </ul>
                        </div>
                        <div className='cta-second'>
                            <img src='images/GESG_logo.PNG' className='img-last' />
                        </div>

                    </div>
                </div>
            </div>
            <div className='final'>
                <p>Privacy Policy |@ 2024 GESG. All Rights Reserved & Made By NTE<i>2Ad</i></p>
            </div>

        </>
    )
}

export default Footer
