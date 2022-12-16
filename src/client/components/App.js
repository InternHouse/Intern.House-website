import React from 'react';
import { browserHistory } from 'react-router'
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Rent from './Rent'
import '../styles/sitewide.scss';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
				<Route 
					path='/'
					element={
						<Homepage />
					}
				/>
				<Route
					path='/rent'
					element={
						<Rent />
					}
				/>
			</Routes>
        </>
    );
}


export default App;
