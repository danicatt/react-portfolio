import React, { Component } from 'react'
import '../MainHeader/MainHeader.scss'
import Jumbotron from 'react-bootstrap/Jumbotron';
import profilePic from '../../assets/profilePic.jpg';

export class MainHeader extends Component {
    render() {
        return (
            <Jumbotron className="header">
                <h1>Hey, I'm Danielle Catterill</h1>
                <h3>Thanks for stopping by.</h3>
                <img src={profilePic} alt="profilePicture" className="headerImage"/>
                </Jumbotron>
        )
    }
}

export default MainHeader
