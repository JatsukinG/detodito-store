import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

  return (
      <div className="w-96 px-12 py-8 z10">
        <p className="text-2xl text-center">Welcome back!</p>
        <form className="mt-6 text-sm">
          <p className="mb-2">
            <b>Email</b>
          </p>
          <input className="w-full mb-4 border-2 p-2 items-center"
                 type="text"
                 placeholder="Enter your email"
          />
          <p className="mb-2">
            <b>Password</b>
          </p>
          <input className="w-full mb-6 p-2 border-2 items-center"
                 type="password"
                 placeholder="*********"
          />
          <div className="flex justify-between text-sm">
            <div className="hover:underline">
              <input className="mr-2"
                     id="rememberMe"
                     type="checkbox"
              />
              <label className="cursor-pointer"
                     htmlFor="rememberMe">
                <b>Remember me</b>
              </label>
            </div>
            <p className="cursor-pointer hover:underline">
              <b>Forgot Password</b>
            </p>
          </div>
          <button className="w-full text-white bg-black p-2 mt-6">
            Sign In
          </button>
          <button className="w-full flex justify-center items-center bg-white p-2 border-2 mt-4">
            <span className="mr-2"><FcGoogle size={20}/></span> Sign In with Google
          </button>
        </form>
      </div>
  )
}

export default Login