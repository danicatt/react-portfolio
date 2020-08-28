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
                        <Col md={4}className="col1"><img src={collectionProj} alt="Cartoon Collection" className="img" /></Col>
                        <Col md={4}className="col2"><img src={aptitudeProj} alt="" className="img" /></Col>
                        <Col md={4}className="col3"><img src={cardGame} alt="" className="img" /></Col>
                        <Col md={4}className="col1"><img src={comingSoon} alt="" className="img" /></Col>
                        <Col md={4}className="col2"><img src={estatesPrj} alt="" className="img" /></Col>
                        <Col md={4}className="col3"><img src={finCalculator} alt="" className="img" /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Projects


