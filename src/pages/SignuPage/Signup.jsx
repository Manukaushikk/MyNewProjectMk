import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">
                        <span className="text-blue-600">e</span>RMC
                    </h1>
                </div>
                <p className="text-center text-gray-600 mb-4">Register a new membership</p>
                <form action="../../index.html" method="post">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <input type="text" id="fullName" className="form-control w-full p-2" placeholder="Full name" />
                            <span className="flex items-center px-3 border-l">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <input type="email" id="email" className="form-control w-full p-2" placeholder="Email" />
                            <span className="flex items-center px-3 border-l">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <input type="password" id="password" className="form-control w-full p-2" placeholder="Password" />
                            <span className="flex items-center px-3 border-l">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Retype Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <input type="password" id="confirmPassword" className="form-control w-full p-2" placeholder="Retype password" />
                            <span className="flex items-center px-3 border-l">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="agreeTerms" name="terms" className="mr-2" />
                        <label htmlFor="agreeTerms" className="text-gray-700">I agree to the <a href="#" className="text-blue-600 underline">terms</a></label>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">Register</button>
                </form>
                <p className="text-center mt-4">
                    <Link to="/" className="text-blue-600 underline">I already have a membership</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
