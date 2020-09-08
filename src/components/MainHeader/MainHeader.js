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
            "name":"Danielle Catterill",
            "github": "https://github.com/danicatt",
            "linkedIn": "https://www.linkedin.com/in/danielle-catterill-013b9b75",
            "email": "decatterill@gmail.com"
        }
    }

    render() {
        return (
            <div>
                <section className="socialContainer">
                    <a href={ this.state.github }>
                    <FontAwesomeIcon icon={ faGithubSquare } size='4x' style={{padding: 10}} />
                    </a>
                    <a href={ this.state.linkedIn }>
                    <FontAwesomeIcon icon={ faLinkedin } size='4x' style={{padding: 10}} />
                    </a>
                <br/>
                    <a href="mailto:decatterill@gmail.com" className="email">{this.state.email}</a>
                </section>
                <Jumbotron className="header">
                    <h1>Hey, I'm {this.state.name}</h1>
                    <h3>Thanks for stopping by.</h3>
                    <img src={ profilePic } alt="profilePicture" className="headerImage" />
                </Jumbotron>
            </div>
        )
    }
}

export default MainHeader
