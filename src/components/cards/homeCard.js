import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../css/default.css';

const AboutCard = props => {
    return (
        <div>
            <span className='anchor' id='about'></span>
            <div className='container' style={{ padding: '0px' }}>
                <Row>
                    <Col className="bigScreen" xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Card style={{ height: '100%' }} >
                            <Card.Header>{props.home.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{props.home.name}</Card.Title>
                                <Card.Text>
                                    {props.home.rooms} <br /> {props.home.extras} <br /> {props.home.surroundings} <br />
                                </Card.Text>
                                <Card.Text>
                                    <br />
                                    Contact: <a href={`mailto:${props.home.contact}`}>{props.home.contact}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="smallScreen" xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Card style={{ height: '100%' }}>
                            <Card.Header>Image</Card.Header>
                            <Card.Body>
                                <img src={props.home.image} alt={props.home.image} width="100%" height="100%" className="noPadding" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutCard;