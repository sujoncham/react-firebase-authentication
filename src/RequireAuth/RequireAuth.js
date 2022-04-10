 import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase.init';
 
 const RequireAuth = ({children}) => {
     const [user] = useState(auth);
     const location = useLocation();
     if(!user){
         return <Navigate to="/login" state={{from:location}} replace></Navigate>
     }
     return children;
 };
 
 export default RequireAuth;