import React from 'react';
import './css/dashboard.css';
import Navbar from './navbar';
import Weather from './weather';
import ChatbotMain from './chatbot/chatmain';

function Dashboard() {
    return(
        <>
        <div>
            {/* <Navbar/>
            <Weather/> */}
            <div className="dashboard-Navbar">
                <Navbar/>
            </div>
            <div className='dashboard-chatbot'>
                <ChatbotMain/>
            </div>
            <div className='dashboard-Weather'>
                <Weather/>
            </div>
        </div>
        </>
    )
}
export default Dashboard;