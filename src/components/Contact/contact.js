import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pre42qt', 'template_0hmyk9w', form.current,'s62gb0wp-2dQkgSu_' )
          .then(
            (result) => {

              console.log(result.text);
              e.target.reset();
              alert("Email Sent !");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


    return (
        <section id='contactPage'>
        <div id='contact'>
            <hl className='contactPageTitle'>Contact Me</hl>
            <p className='contactDesc'>Please fill out the form below to discuss any work opportunities.</p>
            <form className="contactForm" ref={form}  onSubmit={sendEmail}>
                <input type="text" className="names" placeholder="Your Name" name="from_name"></input>
                <input type="email" className="email" placeholder="Your Email" name="from_email"></input>
                <textarea type='message' rows='5' className="msg" placeholder="Your Message" name="message"></textarea>
                <button type='submit' value='send' className="submitBtn" >Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt='Facebook'className="link"></img>
                    <img src={TwitterIcon} alt='Twitter'className="link"></img>
                    <img src={YoutubeIcon} alt=''className="link"></img>
                    <img src={InstagramIcon} alt=''className="link"></img>
                </div>
            </form>
        </div>
        </section>
    )
}


export default Contact;