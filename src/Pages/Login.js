import React from 'react'
import Signinbox from '../Components/Account/Signin/Signinbox'

const Login = () => {
  return (
    <div>
      <div className="bg-blue-950 border-b-2 border-white">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center">
            <h3>Account</h3>
          </div>
        </div>
      </div>
      <Signinbox />      
    </div>
  )
}

export default Login
