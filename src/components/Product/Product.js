import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductInformation from '../ProductInformation/ProductInformation';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/userproduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

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

                {
                    products.map(product => <ProductInformation product={product} key={product.id}></ProductInformation>)
                }
            </div>
        </div>
    );
};

export default Product;