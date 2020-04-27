import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/default.css';

class ContentNavbar extends React.Component {

    render() {
        return (
            <div className='ui container'>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Nav.Link as={Link} to="/">
                        <img style={{ maxHeight: '30px', marginRight: '5px' }} src={require('../img/houses.png')} alt='logo-img' />
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/rentals">Rentals</Nav.Link>
                            {/* <Nav.Link as={Link} to="/account">Login</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default ContentNavbar;