import React from 'react';
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const  PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const user = localStorage.getItem('user');

    if(user){
        return children;
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must enter your details before proceed to the Next page!',
        })
        return <Navigate to='/' replace={true}/>
    }

};

export default PrivateRoute;