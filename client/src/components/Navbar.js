import React, { Component } from 'react';
import styles from "../styles";


class Navbar extends Component {
    render() {
        return(
            <nav style={styles.navbar}>
                <div style={styles.leftNav}>Intern.House</div>
                <div style={styles.rightNav}>
                    <div style={styles.rightNav}>Testimonials</div>
                    <div style={styles.rightNav}>About</div>
                    <div style={styles.rightNav}>Rent</div>
                </div>
                
            </nav>    
        )
    }
}




export default Navbar;