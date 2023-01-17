import React from 'react';
import { Navigate } from 'react-router-dom';
import {findUser} from '../../Hook/addUser';

const PrivateRoute = ({children}) => {

    const user = findUser();

    if(Object.keys(user).length === 0){
        return children;
    }

    
    return <Navigate to='/profile'></Navigate>
};

export default PrivateRoute;