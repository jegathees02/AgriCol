import React from 'react';
import './css/dashboard.css';
import Navbar from './navbar';
import Weather from './weather';
import ChatbotMain from './chatbot/chatmain';
import DashBoardRecent from './dashboard-recent';
import Footer from './footer';
function Dashboard() {
    return(
        <>
        <div>
            {/* <Navbar/>
            <Weather/> */}
            <div className="dashboard-Navbar">
                <Navbar/>
            </div>
            <div className='dashbaord-recent'>
                <DashBoardRecent/>
            </div>
            <div className='dashboard-chatbot'>
                <ChatbotMain/>
            </div>
            <div className='dashboard-Weather'>
                <Weather/>
            </div>
            <div className='dashboard-Weather'>
                <Footer/>
            </div>
        </div>
        </>
    )
}
export default Dashboard;