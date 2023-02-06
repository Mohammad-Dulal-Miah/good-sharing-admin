import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {

    const [cart, setCart] = useState([]);



    useEffect(() => {

        fetch('http://localhost:4000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <div className='container'>

            <div className='position'>
                <div className='navbar-container container'>

                    <Navbar>
                        <Container>
                            <Nav className="me-auto">
                                <Link to="/user">user verification</Link>
                                <Link to="/order">orders</Link>
                                <Link to='/product'>user product</Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className='col-md-12 mt-5'>
                <h1>Order section</h1>
                {
                    cart.map(list => <Cart list={list} key={list.cid}></Cart>)
                }
            </div>
        </div>
    );
};

export default Order;