import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
    return(
        <section id='footer-layout'> 
            <footer id='footer'>
                <p id='left' className='footer-text'>Not affiliated with Tesla, Inc.</p>
                <p id='right' className='footer-text'>© 2022-2023, Intern.House</p>
            </footer>
        </section>
    );
}


export default Footer;