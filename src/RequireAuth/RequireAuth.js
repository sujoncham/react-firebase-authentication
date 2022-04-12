 import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase.init';
 
 const RequireAuth = ({children}) => {
     const [newUser] = useState(auth);
     const location = useLocation();
     if(!newUser){
         return <Navigate to="/login" state={{from:location}} replace></Navigate>
     }
     return children;
 };
 
 export default RequireAuth;