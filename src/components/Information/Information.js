import React from 'react';

const Information = ({ user, accept, reject }) => {

    const { name, address, city, word, number } = user;



    return (
       


            <div className='col-sm-12 col-md-6 text-center p-5 ' style={{ border: "2px solid grey", borderRadius: "10px" }}>
                <h4>{name}</h4>
                <h3>address:{address}</h3>
                <h3>City: {city}</h3>
                <p>Word no:{word}</p>
                <p>Number: {number}</p>
                <button className='btn btn-success' onClick={() => accept(user)}>Accept</button>
                <button className='btn btn-danger' onClick={() => reject(user.id)}>Reject</button>
            </div>
      
    );
};

export default Information;