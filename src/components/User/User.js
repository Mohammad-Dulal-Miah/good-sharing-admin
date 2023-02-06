import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Information from '../Information/Information';

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
        }

    }


    return (
        <div className='container'>
            <div className='position'>
                <div className='navbar-container container'>

                    <Navbar>
                        <Container>
                            <Nav className="me-auto">
                                <Link to="/user">user verification</Link>
                                <Link to="/order">orders</Link>
                                <Link to='/product'>user product</Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
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