import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { Redirect } from 'react-router-dom';

const Admin = ()  => {
    const {isLoggedIn} = useContext(AuthContext);

    // if (!isLoggedIn) {
    //     return <Redirect to="/"></Redirect>
    // }
    
  return (
    <div>
        <h1>Admin</h1>
    </div>
  );
}

export default Admin;