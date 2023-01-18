import React from 'react';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {

    return (
        <div className="bg-blue-500 w-screen h-screen flex justify-center items-center absolute">
            <div className="px-20 py-8 bg-white relative">
                <p className="text-3xl text-center">
                    Welcome back!
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    The faster you fill, the faster you will get your purchase
                </p>
                <form className="mt-6 w-96">
                    <p className="mb-2">
                        <b>Email</b>
                    </p>
                    <input className="mb-8 border-2 p-2 w-96 items-center"
                           type="text"
                           placeholder="Enter your email"
                    />
                    <p className="mb-2">
                        <b>Password</b>
                    </p>
                    <input className="mb-6 p-2 border-2 w-96 items-center"
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
                    <button className="text-white bg-black w-96 p-2 mt-6">
                        Sign In
                    </button>
                    <button className="flex justify-center items-center bg-white w-96 p-2 border-2 mt-4">
                        <span className="mr-2"><FcGoogle size={20}/></span> Sign In with Google
                    </button>
                    <p className="text-gray-400 text-xs mt-8 text-center">
                        Don't have an account? <b className="text-black cursor-pointer hover:underline"> Sign up</b>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;