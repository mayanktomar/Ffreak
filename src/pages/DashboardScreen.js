import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UserDashboard from '../components/UserDashboard';

function DashboardScreen(props){
    return(
        <>
            <Header/>
            <UserDashboard {...props}/>
            <Footer/>
        </>
    )
}

export default DashboardScreen;