import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'

const SecureLayout = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <>
        {isAuthenticated ? <Outlet/> : <Navigate to="/"/>}

    </>
  )
}

export default SecureLayout