import React from 'react';
import './ProductInformation.css';

const ProductInformation = ({ product,confirmProduct , cancelProduct }) => {

    const { name, seller, rentPrice} = product;

    return (
        <div class="card">
            <div class="card-header">
                <h2>Product name: {name}</h2>
            </div>
            <div class="card-body">
                <p>Seller: {seller}</p>
            </div>
            <div class="card-footer">
              <p>Rent price: {rentPrice}</p>
              <button className='btn btn-success m-2' onClick={()=> confirmProduct(product)}>confirm</button>
              <br />
              <button className='btn btn-success m-2' onClick={()=> cancelProduct(product)}>Cancel</button>
            </div>
        </div>

    );
};

export default ProductInformation;