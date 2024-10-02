import React from 'react';
import { Link } from 'react-router-dom'; // Import if using React Router

const RecoverPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-blue-600">eRMC</h1>
                    <p className="mt-2 text-gray-600">
                        You are only one step away from your new password. Recover your password now.
                    </p>
                </div>
                <form action="login.html" method="post" className="space-y-4">
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <span className="absolute right-2 top-2 text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <span className="absolute right-2 top-2 text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
                    >
                        Change Password
                    </button>
                </form>
                <p className="mt-3 text-center">
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RecoverPassword;
