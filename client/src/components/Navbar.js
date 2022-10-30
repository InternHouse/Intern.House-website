import React, { Component } from 'react';
import '../styles/sitewide.scss';
import '../styles/navbar.scss';

class Navbar extends Component {
    render() {
        return(
            <nav id='navbar'>
                <h1 id='title'>Intern.House</h1>
                <section>
                    <h2>Testimonials</h2>
                    <h2>About</h2>
                    <h2>Rent</h2>
                </section>
            </nav>
        )
    }
}




export default Navbar;
