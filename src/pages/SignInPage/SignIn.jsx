import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold">Admin <span className="text-blue-500">LTE</span></h1>
                </div>
                <p className="text-center text-gray-600 mb-4">Sign in to start your session</p>
                <form action="../../index3.html" method="post">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-orange-700">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-700">Remember Me</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center my-4">
                    <p>- OR -</p>
                </div>
                <div className="mt-4">
                    <p className="text-center">
                        <Link to="/forgotpassword" className="text-blue-500 hover:underline">I forgot my password</Link>
                    </p>
                    <p className="text-center">
                        <Link to="/signup" className="text-blue-500 hover:underline">Register a new membership</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
