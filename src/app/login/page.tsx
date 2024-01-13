"use client"
import React, { useState, FormEvent } from "react";
import { LocalBackURL } from "@/constants/constants";
import axios from "axios";

interface SchoolData {
    schoolId: string;
    schoolPassword: string;

}

// ToDo --> Just add a validation - whether the password and id is correct or not. 

const LoginPage: React.FC = () => {
    const [schoolId, setSchoolId] = useState<string>("");
    const [schoolPassword, setSchoolPassword] = useState<string>("");
    const [schoolData, setSchoolData] = useState<SchoolData | null>(null);

    const fetchLoginDetails = async () => {
        try {
            const response = await axios.post<{ school: SchoolData }>(LocalBackURL + '/api/school/loginschool', {
                schoolId,
                schoolPassword,
            });

            if (response.status !== 200) {
                throw new Error('Failed to fetch login details');
            }

            const data = response.data;
            console.log("response:", response.status, data);

            if (data.school !== undefined) {
                setSchoolData(data.school);
                console.log("schoolData:", schoolData);
                return data.school
            }
        } catch (error) {
            console.error('Error fetching login credentials:', error);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/loginimage.png')" }}>
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">School Login</h1>
                <form onSubmit={fetchLoginDetails}>
                    <div className="mb-4">
                        <label htmlFor="schoolId" className="block text-gray-700 text-sm font-bold mb-2">School ID:</label>
                        <input
                            type="text"
                            id="schoolId"
                            value={schoolId}
                            onChange={(e) => setSchoolId(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="schoolPassword" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            id="schoolPassword"
                            value={schoolPassword}
                            onChange={(e) => setSchoolPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
