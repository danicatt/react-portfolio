import React, { Component } from 'react'
import '../Projects/Projects.scss'
import collectionProj from '../../assets/collection.png'
import aptitudeProj from '../../assets/aptitude.png'
import cardGame from '../../assets/armadillo-card-game.png'
import comingSoon from '../../assets/coming-soon.jpg'
import estatesPrj from '../../assets/estates.png'
import finCalculator from '../../assets/finance-calculator.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export class Projects extends Component {
    render() {
        return (
            <div>
                <Container className="section2">
                <h1>Projects</h1>
                    <Row className="row">
                        <Col className="col1" md={4}>
                            <img src={collectionProj} alt="Collection App" className="img"/>
                            <div className="middle">
                                <div className="text">
                                    <h3>Cartoon Collection App.</h3>
                                    <text>An individual project written in PHP and SQL.</text>
                                </div>
                                <a href="https://github.com/danicatt/collector-app" className="btn btn-info">Github</a>
                            </div>
                        </Col>
                        <Col className="col2" md={4}>
                            <img src={aptitudeProj} alt="Aptitude test" className="img"/>
                            <div class="middle">
                                <div class="text">
                                    <h3>Academy Aptitude Test.</h3> 
                                    <text>Added features to an existing codebase. Compiled using Gulp and written in Javascript.</text>
                                </div>
                                <a href="https://github.com/Mayden-Academy/aptitude-test" className="btn btn-info">Github</a>
                            </div>
                        </Col>
                        <Col className="col3" md={4}>
                            <img src={cardGame} alt="Brain-training game" className="img"/>
                            <div class="middle">
                                <div class="text">
                                    <h3>Armadillo's Brain Training Numbers Game.</h3> 
                                    <text>Written in Javascript and a nod to Flexbox Froggy.</text>
                                </div>
                                <a href="http://dev.maydenacademy.co.uk/projects/2020Feb/2020-feb-numberGame/" className="btn btn-info">Demo</a>
                            </div>
                        </Col>
                        <Col className="col1" md={4}>
                            <img src={comingSoon} alt="Coming soon" className="img"/>
                            <div className="middle">
                                <div className="text">
                                    <h3>To Do List.</h3> 
                                    <text>An individual project using Slim (PHP MVC Framework) & MySQl database.</text>
                                </div>
                            </div>
                        </Col>
                        <Col className="col2" md={4}>
                            <img src={estatesPrj} alt="Property Website" className="img"/>
                            <div class="middle">
                                <div class="text">
                                    <h3>Armadillo Estates</h3>
                                    <text>Created using OOP and written in Javascript. With a styling nod to PHP.net!</text>
                                </div>
                                <a href="https://github.com/Mayden-Academy/2020-feb-propertyListing" className="btn btn-info">Github</a>
                            </div>
                        </Col>
                        <Col className="col3" md={4}>
                            <img src={finCalculator} alt="Finance Calculator" className="img"/>
                            <div class="middle">
                                <div class="text">
                                    <h3>Mayden Academy Finance Calculator.</h3> 
                                    <text>An individual project written in Javascript.</text>
                                </div>
                                <a href="https://github.com/danicatt/finance-calculator" className="btn btn-info">Github</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Projects
