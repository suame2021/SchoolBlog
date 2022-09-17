import React from 'react';
import { Redirect } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
    const loggedIn = localStorage.getItem('token');
    return loggedIn ? children : <Redirect to='/' /> ;
};

export default PrivateRoute;