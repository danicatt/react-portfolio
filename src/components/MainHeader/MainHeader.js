import React, { Component } from 'react'
import '../MainHeader/MainHeader.scss'
import Jumbotron from 'react-bootstrap/Jumbotron'
import profilePic from '../../assets/profilePic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export class MainHeader extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            "name":"Danielle Catterill"
        }
    }

    render() {
        return (
            <Jumbotron className="header">
                <h1>Hey, I'm {this.state.name}</h1>
                <h3>Thanks for stopping by.</h3>
                <img src={ profilePic } alt="profilePicture" className="headerImage" />
                <div className="socialContainer">
                    <a href="https://github.com/danicatt">
                        <FontAwesomeIcon icon={ faGithubSquare } size='8x' style={{padding: 10}} />
                    </a>
                    <a href="https://www.linkedin.com/in/danielle-catterill-013b9b75/">
                        <FontAwesomeIcon icon={ faLinkedin } size='8x' style={{padding: 10}} />
                    </a>
                    <br/>
                    <br/>
                    <span className="email">decatterill@gmail.com</span>
                </div>
            </Jumbotron>
        )
    }
}

export default MainHeader
