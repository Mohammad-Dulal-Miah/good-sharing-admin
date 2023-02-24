import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import InnerNavbar from '../InnerNavbar/InnerNavbar';

const Order = () => {

    const [cart, setCart] = useState([]);
    const[state , setState] = useState(false);



    useEffect(() => {

        fetch('http://localhost:4000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])


    const confirm = (cid, pid,stock) => {

        const data = { cid, pid ,stock};

        fetch('http://localhost:4000/cart/confirm', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setState(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        if(state){

            const newCart = cart.filter(p => p.cartid !== cid);
            setCart(newCart);
            <Navigate to='/order'></Navigate>
        }

    }


    const cancel = (cid)=>{

        const data={cid};
        fetch('http://localhost:4000/cart/cancel', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setState(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        if(state){

            const newCart = cart.filter(p => p.cartid !== cid);
            setCart(newCart);
            <Navigate to='/order'></Navigate>
        }

        



    }
    return (
        <div className='container'>

            <InnerNavbar />

            <div className='col-md-12 mt-5'>
                <h1>Order section</h1>
                {
                    cart.map(list => <Cart list={list} confirm={confirm} cancel={cancel} key={list.cid}></Cart>)
                }
            </div>
        </div>
    );
};

export default Order;