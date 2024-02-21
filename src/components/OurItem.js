import React from 'react'
import "./OurItem.css"
import './../index.css'


function OurItem() {
    return (
        <div>
            <section id='about'>
                <h5>About Our Company </h5>
                <h2>How We Can Help You</h2>
                <div className="container about__container">
                    <div className="about__content">
                        <p>
                            To obtain the most accurate and up-to-date information, 
                            I recommend checking the latest online sources such as business
                         directories, company websites, or news articles. Additionally, 
                         you may want to specify the industry or sector in which Global Excellent
                          Solutions Group operates, as there might be multiple companies with similar
                           names across different fields.


                        </p>
                        <a href="#contact" className='btn btn-primary'> Let's Talk</a>

                    </div>
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src="images/work.jpg" alt='' className='me-ab' />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default OurItem
