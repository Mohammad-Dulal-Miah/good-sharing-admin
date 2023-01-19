import React, { useEffect, useState } from 'react';

const Cart = ({list}) => {

    const{cartid , pid, uid} = list;
    const [info , setInfo] = useState({});

    useEffect(()=>{

        fetch(`http://localhost:4000/singleProduct/${pid}`)
        .then(res => res.json())
        .then(data => setInfo(data[0]))
    },[])


    return (
        <div className='p-5' style={{border:"2px solid grey", borderRadius:"10px"}}>
            <p>User: {uid}</p>
            <p>Price: {info.rentPrice}</p>
            <button className='btn btn-success'>Confirm</button>
        </div>
    );
};

export default Cart;