import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Profile.css';

const Profile = () => {

    const [users, setUsers] = useState([]);
    const [data, setData] = useState(false);
    const [cart , setCart] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        
    }, [])


    useEffect(()=>{

        fetch('http://localhost:4000/cart')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])




    const accept = (user) => {

        fetch('http://localhost:4000/accept', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error('Error:', error);
                setData(false)
            });


        if (data) {

            const otherUser = users.filter(person => person.id !== user.id);
            setUsers(otherUser);
        }

    }


    const reject = (id) => {



        fetch(`http://localhost:4000/reject/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(data => {
                setData(data)
            })
            .catch(error=>{
                setData(false)
            })


        if (data) {

            const otherUser = users.filter(person => person.id !== id);
            setUsers(otherUser);
        }

    }



    return (
        <div className='container'>
            <h1 className="mt-5" style={{ color: "tomato" }}>User Verification</h1>
            <div className='row information'>
                {
                    users.map(user => <Information user={user} accept={accept} reject={reject} key={user.id}></Information>)
                }
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

export default Profile;