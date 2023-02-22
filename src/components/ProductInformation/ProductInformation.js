import React from 'react';
import './ProductInformation.css';

const ProductInformation = ({ product }) => {

    const { name, seller, rentPrice, price } = product;

    return (
        <div class="card">
            <div class="card-header">
                <h2>User: {name}</h2>
            </div>
            <div class="card-body">
                <p>Seller: {seller}</p>
            </div>
            <div class="card-footer">
              <p>Rent price: {rentPrice}</p>
            </div>
        </div>

    );
};

export default ProductInformation;