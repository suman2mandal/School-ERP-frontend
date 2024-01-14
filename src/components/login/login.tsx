"use client"
import { useState, FormEvent } from 'react';
import React from 'react';
import Image from 'next/image';


const LoginPage: any = ({ onSubmit, schoolId, schoolPassword, setSchoolId, setSchoolPassword }:{onSubmit:any, schoolId:any, schoolPassword:any, setSchoolId:any, setSchoolPassword:any}) => {
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Call the onSubmit prop with email and password
        onSubmit(schoolId, schoolPassword);
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "url('/login-screen-bg.jpg')" }}>
            <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-55 inset-0 z-0"></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        <Image src="" height={100} width={100} className="mb-3" alt="Logo" />
                        <h1 className="mb-3 font-bold text-5xl">Hi ! Welcome Back </h1>
                        <p className="pr-3">
                            Elevate education with SchoolInt: Transforming school management through innovation. Join us for an efficient and successful learning experience. 🚀📚</p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">School Id</label>
                                <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="School Id" value={schoolId} onChange={(e) => { setSchoolId(e.target.value) }} />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    School Password
                                </label>
                                <input className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" value={schoolPassword} onChange={(e) => { setSchoolPassword(e.target.value) }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500" onClick={handleSubmit}>
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                                <a href="" rel="noopener noreferrer" target="_blank" title="Schoolint" className="text-green hover:text-green-500">SchoolInt</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
