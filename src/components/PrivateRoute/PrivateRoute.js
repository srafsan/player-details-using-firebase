import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = getAuth();
    let location = useLocation();

    if (user)
        return children;
    else
        return <Navigate to='/login' state={{ from: location }} />
};

export default PrivateRoute;