import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Information from '../Information/Information';
import InnerNavbar from '../InnerNavbar/InnerNavbar';

const User = () => {

    const [users, setUsers] = useState([]);
    const [data, setData] = useState(false);

    useEffect(() => {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])



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
            <Navigate to='/user'></Navigate>
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
            .catch(error => {
                setData(false)
            })


        if (data) {

            const otherUser = users.filter(person => person.id !== id);
            setUsers(otherUser);
            <Navigate to='/user'></Navigate>
        }

    }


    return (
        <div className='container'>
          <InnerNavbar/>
            <h1 className="mt-5 " style={{ color: "tomato" }}>User Verification</h1>
            <div className='row information'>
                {
                    users.map(user => <Information user={user} accept={accept} reject={reject} key={user.id}></Information>)
                }
            </div>
        </div>
    );
};

export default User;