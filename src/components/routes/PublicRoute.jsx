import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = (props) => {
    if (!localStorage.getItem("user")) {
        return props.children;
    } else if (localStorage.getItem("user")) {
        return <Navigate to="/admin" />;
    }
}

export default PublicRoute