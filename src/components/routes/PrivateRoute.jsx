import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    if (!localStorage.getItem("user")) {
        return <Navigate to={'/login'}/>
    } else if (localStorage.getItem("user")) {
        return props.children;
    }
}

export default PrivateRoute