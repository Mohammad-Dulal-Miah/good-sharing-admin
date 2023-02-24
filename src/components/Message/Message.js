import React from 'react';
import './Message.css';

const Message = ({message1}) => {

    const {name ,email,message} = message1;
    return (
        <div class="card">
            <div class="card-header">
                <h2>Name: {name}</h2>
            </div>
            <div class="card-body">
                <p>Email: {email}</p>
                <p>Message: {message}</p>
            </div>
           
        </div>
    );
};

export default Message;