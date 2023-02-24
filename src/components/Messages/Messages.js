import React, { useEffect, useState } from 'react';
import InnerNavbar from '../InnerNavbar/InnerNavbar';
import Message from '../Message/Message';

const Messages = () => {

    const[messages , setMessages] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/message')
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [])

    return (
        <div className='container'>
            <InnerNavbar/>
            {
                messages.map(message1 => <Message message1={message1} key={message1.id}></Message>)
            }
        </div>
    );
};

export default Messages;