import React, { useContext } from 'react'
import { AuthContext } from '../component/providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children;
    }

  return (
    <>
        <Navigate to={'/login'} state={{from:location}} replace={true}/>
    </>
  )
}

export default PrivetRout