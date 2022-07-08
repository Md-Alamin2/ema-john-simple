import React from 'react';
import { Navigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    return user.email? children : <Navigate to="/singin" />
};

export default PrivateRoute;
