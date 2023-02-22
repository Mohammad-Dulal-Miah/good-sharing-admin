import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InnerNavbar from '../InnerNavbar/InnerNavbar';
import ProductInformation from '../ProductInformation/ProductInformation';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/userproduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    
    return (
        <div className='container'>

          <InnerNavbar/>


            <div className='col-md-12 mt-5'>

                {
                    products.map(product => <ProductInformation product={product} key={product.id}></ProductInformation>)
                }
            </div>
        </div>
    );
};

export default Product;