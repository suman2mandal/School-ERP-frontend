"use client"
import React, { useState, FormEvent } from "react";
import { LocalBackURL } from "@/constants/constants";
import axios from "axios";
import LoginPage from "@/components/login/login";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SchoolData {
    schoolId: string;
    schoolPassword: string;
}

const LoginScreen: React.FC = () => {
    const [schoolId, setSchoolId] = useState<string>("");
    const [schoolPassword, setSchoolPassword] = useState<string>("");
    const [schoolData, setSchoolData] = useState<SchoolData | null>(null);

    const fetchLoginDetails = async () => {
        try {
            const response = await axios.post<{ school: SchoolData }>(LocalBackURL + '/api/school/loginschool', {
                schoolId,
                schoolPassword,
            });

            const data: { school?: SchoolData; schoolId?: string; schoolPassword?: string } = response.data;
            console.log("response:", response.status, data);

            if (data.school !== undefined) {
                setSchoolData(data.school);
                console.log('schoolData:', schoolData);
            } else if (data.schoolId === schoolId && data.schoolPassword === schoolPassword) {
                console.log("Login success");
                toast.success('Login success', { position: toast.POSITION.TOP_RIGHT });
            } else {
                console.log("Login fail");
                toast.error('Can be wrong credentials', { position: toast.POSITION.TOP_RIGHT });
            }
        } catch (error) {
            alert("Error present");
        }
    };



    return (
        <div>
            <LoginPage onSubmit={fetchLoginDetails} schoolId={schoolId} schoolPassword={schoolPassword} setSchoolId={setSchoolId} setSchoolPassword={setSchoolPassword} />
        </div>

    );
};

export default LoginScreen;
