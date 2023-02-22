import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menubar.css';

const Menubar = () => {
    return (
        <div className='position'>
            <div className='navbar-container navbar bg-light p-2 container'>
            <h2><Link to='/profile'><span style={{ color: "tomato" }}>Pase</span></Link></h2>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        </div>
    );
};

export default Menubar;