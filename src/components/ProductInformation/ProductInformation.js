import React from 'react';

const ProductInformation = ({product}) => {

    const {name ,img, seller , rentPrice , price} = product;

    return (
       <div className='p-5' style={{border:"2px solid grey", borderRadius:"10px"}}>
            <p>Name: {name}</p>
            <p>img url: {img}</p>
            <p>seller: {seller}</p>
            <p>Rent price: {rentPrice}</p>
            <p>Price:{price}</p>
            <button className='btn btn-success'>Confirm</button>
        </div>
    );
};

export default ProductInformation;