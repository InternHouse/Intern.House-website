import React, { Component } from 'react';
import styles from "../styles";


class Navbar extends Component {
    render() {
        return(
            <nav style={styles.navbar}>
                <div style={styles.h1}>Intern.House</div>
                <div style={styles.h2}>
                    <div style={styles.h2}>Testimonials</div>
                    <div style={styles.h2}>About</div>
                    <div style={styles.h2}>Rent</div>
                </div>

            </nav>
        )
    }
}




export default Navbar;
