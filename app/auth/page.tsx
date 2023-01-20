'use client'
import React, { useState } from 'react'
import Login from '@/app/auth/components/login'
import SignUp from '@/app/auth/components/sign-up'

const Auth = () => {
  const [componentShowed, setComponentShowed] = useState<string>('login')

  return (
      <div className="w-full h-full bg-violet-400 flex">
        <div className="w-2/3 h-1/2 flex m-auto relative">
          <div
              className={`w-1/2 ${componentShowed === 'login' ? 'bg-white' : 'bg-violet-700'} flex justify-center items-center transition-all duration-500`}>
            {
              componentShowed === 'login' ?
                  <Login/> :
                  <div className="flex flex-col gap-4">
                    <h4 className="text-md text-white">I have an account</h4>
                    <button
                        className="bg-white px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-gray-200 hover:scale-110 duration-300"
                        onClick={() => setComponentShowed('login')}>
                      Login
                    </button>
                  </div>
            }

          </div>
          <div
              className={`w-1/2 ${componentShowed === 'signUp' ? 'bg-white' : 'bg-violet-700'} flex justify-center items-center transition-all duration-500`}>
            {
              componentShowed === 'signUp' ?
                  <SignUp/> :
                  <div className="flex flex-col gap-4">
                    <h4 className="text-md text-white">Don't have an account?</h4>
                    <button
                        className="bg-white px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-gray-200 hover:scale-110 duration-300"
                        onClick={() => setComponentShowed('signUp')}>
                      Sign Up
                    </button>
                  </div>
            }
          </div>
        </div>
      </div>
  )
}

export default Auth