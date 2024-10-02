import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-blue-600">Admin <span className="text-blue-500">LTE</span></h1>
                    </Link>
                </div>

                <p className="text-center text-gray-600 mb-4">
                    You forgot your password? Here you can easily retrieve a new password.
                </p>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200"
                        >
                            Request New Password
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-600 mb-3">
                    <Link to="/" className="text-blue-500 hover:underline">Login</Link>
                </p>
                <p className="text-center text-gray-600">
                    <Link to="/signup" className="text-blue-500 hover:underline">Register a new membership</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
