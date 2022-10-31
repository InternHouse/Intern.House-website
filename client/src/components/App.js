import React, { Component } from 'react';
import Navbar from './Navbar';
import Details from './details/Details'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Details/>
            </div>
        );
    }
}


export default App;
