import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import './Profile.css';

const Profile = () => {

    const [users, setUsers] = useState([]);
    const [data , setData] = useState(false);

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

        
            if(data){

                const otherUser = users.filter(person => person.id !== user.id);
                setUsers(otherUser);
            }

    }




    return (
        <div className='container'>
            <h1 className="mt-5" style={{ color: "tomato" }}>User Verification</h1>
            <div className='row information'>
                {
                    users.map(user => <Information user={user} accept={accept} key={user.id}></Information>)
                }
            </div>
        </div>
    );
};

export default Profile;