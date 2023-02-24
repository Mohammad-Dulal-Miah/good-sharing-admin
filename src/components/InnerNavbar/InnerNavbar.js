import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InnerNavbar = () => {
    return (
        <div className='position'>
        <div className='navbar-container container'>

            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Link to="/user">user verification</Link>
                        <Link to="/order">orders</Link>
                        <Link to='/product'>user product</Link>
                        <Link to='/message'>Message</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </div>
    );
};

export default InnerNavbar;