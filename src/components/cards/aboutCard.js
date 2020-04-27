import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../css/default.css';
import { Link } from 'react-router-dom';

const AboutCard = () => {
    return (
        <div>
            <span className='anchor' id='about'></span>
            <div className='container' style={{ padding: '0px' }}>
                <Row>
                    <Col className="bigScreen" xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Card style={{ height: '100%' }} >
                            <Card.Header>About</Card.Header>
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Who am I?</Card.Subtitle>
                                <Card.Text>
                                    Application Developer in the 4th year. <br />Doing my Apprenticeship in Zurich Altstetten.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">What's this project about?</Card.Subtitle>
                                <Card.Text>
                                    This project is about renting homes. <br /> You can rent homes <Link to="/rentals" >here</Link>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="smallScreen" xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Card style={{ height: '100%' }}>
                            <Card.Header>GIF</Card.Header>
                            <Card.Body>
                                <img src="https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif" alt="https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif" width="100%" height="100%" className="noPadding" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutCard;