import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import './Contanct.css'

function Contanct() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ejrlwag', 'template_ah08cqj', form.current, {
          publicKey: 'mtv6O1uyNygaH0TFT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <>
       <div className='contant' id='contact'>
                <div className='contact-container'>
                    <div className='contact-left'>
                        <h2 className='title'>BOOK AN APPOINTMENT</h2>
                        <h5 className='mean-title'>Just provide some basic information about services you need</h5>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form1'>
                                
                            <input type="text" name='name' placeholder='Your full Name' required />
                            <input type="text" name='phone' placeholder='Phone number' required />
                            <input type="text" name='email' placeholder='Your Email' required />
                            <input type="text" name='service' placeholder='Services ' required />
                            </div>
                            <div className='form2'>

                            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                            <button className='btn-primar' type='submit' value='send'>send Message</button>
                            <p></p>
                            </div>
                        </form>

                    </div>
                    <div className='contact-right'>
                        <img src='images/trainng.jpg' alt='' className='pic'/>

                    </div>
                </div>
            </div>
      
    </>
  )
}

export default Contanct
