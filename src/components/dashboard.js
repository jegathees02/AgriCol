import React from 'react';
import './css/dashboard.css';
import Navbar from './navbar';
import Weather from './weather';

function Dashboard() {
    return(
        <>
        <div>
            {/* <Navbar/>
            <Weather/> */}
            <div className="dashboard-Navbar">
                <Navbar/>
            </div>
            <div className='dashboard-Weather'>
                <Weather/>
            </div>
        </div>
        </>
    )
}
export default Dashboard;