import React, { Component } from 'react';
import Achievements from './Achievements';
import AskLogin from './AskLogin';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';
import UserDashboard from './UserDashboard';

export class MainComponent extends Component {
    constructor(props)
    {
        super(props);
        
    }
    render() {
        return (
            <div>
                <Header/>
                {/* <AskLogin/> */}
                {/* <UserDashboard/> */}
                {/* <Profile/> */}
                <Achievements/>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default MainComponent
