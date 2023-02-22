import React from 'react';
import './Information.css';

const Information = ({ user, accept, reject }) => {

    const { name, address, city, word, number,email,nid1 } = user;



    return (



        <div className='col-sm-12 col-md-6 text-center'>

            <div>
                <ul class="listview">
                    <li>
                        <div class="title">{name}</div>
                        <div class="description">
                            <p>Address:{address}</p>
                            <p>Phone number: {number}</p>
                            <p>Email: {email}</p>
                            <button className='btn btn-success mt-5' onClick={() => accept(user)}>Accept</button>
                            <br />
                            <button className='btn btn-danger mt-2' onClick={() => reject(user.id)}>Reject</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    );
};

export default Information;