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
                            <Card.Header>{props.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                    {props.rooms} <br /> {props.balcony} <br /> {props.surroundings} <br />
                                </Card.Text>
                                <Card.Text>
                                    <br />
                                    Contact: <a href={`mailto:${props.contact}`}>{props.contact}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="smallScreen" xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Card style={{ height: '100%' }}>
                            <Card.Header>Image</Card.Header>
                            <Card.Body>
                                <img src={props.imageLink} alt={props.imageLink} width="100%" height="100%" className="noPadding" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutCard;