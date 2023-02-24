import React, { useEffect, useState } from 'react';
import InnerNavbar from '../InnerNavbar/InnerNavbar';
import ProductInformation from '../ProductInformation/ProductInformation';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/userproduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const confirmProduct = (product) => {

        let stock1 = product.stock;

        if (stock1) {
            stock1 = stock1 + 1;
            product.stock = stock1;
        }
        else {
            product.stock = 1;
        }

        const id = product.id;
        const name = product.name;
        const category = product.category;
        const rentPrice = product.rentPrice;
        const price = product.price;
        const stock = product.stock;
        const rating = 5;
        const isBooked = 0;
        const img = product.img;
        const seller = product.seller;
        const sellerinfo = product.sellerinfo;
        const option = 1;

        const data = { id,name,category, rentPrice, price, stock, rating, isBooked, img, seller, sellerinfo, option };
        //post data
        fetch('http://localhost:4000/addProduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
        
        const anotherProduct = products.filter(product => product.id !== id);
        setProducts(anotherProduct);

    }

    const cancelProduct = (product) => {

        const id = product.id;

        fetch(`http://localhost:4000/cancelProduct/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))

        const anotherProduct = products.filter(product => product.id !== id);
        setProducts(anotherProduct);




    }


    return (
        <div className='container'>

            <InnerNavbar />


            <div className='col-md-12 mt-5'>

                {
                    products.map(product => <ProductInformation confirmProduct={confirmProduct} cancelProduct={cancelProduct} product={product} key={product.id}></ProductInformation>)
                }
            </div>
        </div>
    );
};

export default Product;