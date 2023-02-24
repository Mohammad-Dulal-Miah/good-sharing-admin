import React, { useEffect, useState } from 'react';

const Cart = ({ list,confirm,cancel }) => {

    const {cartid, pid, uid } = list;
    
    const [info, setInfo] = useState({});

    useEffect(() => {

        fetch(`http://localhost:4000/singleProduct/${pid}`)
            .then(res => res.json())
            .then(data => setInfo(data[0]))
    }, [])


    return (
        <div class="card">
            <div class="card-header">
                <h2>UserId: {uid}</h2>
                {/* <h2>ProductId: {pid}</h2> */}
            </div>
            <div class="card-body">
                <p>Seller: {info.rentPrice+30}</p>
                <button className='btn btn-success mt-5' onClick={()=> confirm(cartid,pid,info.stock)}>Confirm</button>
                <br />
                <btn className='btn btn-danger mt-5' onClick={()=> cancel(cartid)}>Cancel</btn>
            </div>

        </div>
    );
};

export default Cart;