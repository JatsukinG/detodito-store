'use client'
import React, { useState } from 'react'
import Login from '@/app/auth/components/login'
import SignUp from '@/app/auth/components/sign-up'

const Auth = () => {
  const [componentShowed, setComponentShowed] = useState<string>("login")

  return (
      <div className="w-full h-full bg-blue-100 flex">
        <div className="w-2/3 h-1/2 bg-blue-500 m-auto flex relative">
          <div className="w-1/2 bg-white flex justify-center items-center">
          {
            componentShowed === "login" ?
                <Login /> :
                <p className="hover:cursor-pointer" onClick={()=>setComponentShowed("login")}>login</p>
          }

          </div>
          <div className="w-1/2 bg-green-100 flex justify-center items-center">
            {
              componentShowed === "signUp" ?
                  <SignUp /> :
                  <p className="hover:cursor-pointer" onClick={()=>setComponentShowed("signUp")}>Sign Up</p>
            }

          </div>
          <div className={`w-96 h-96 bg-yellow-100 absolute ${componentShowed === 'login' ? 'left-10' : 'right-10'}`}>

          </div>
        </div>
      </div>
  )
}

export default Auth