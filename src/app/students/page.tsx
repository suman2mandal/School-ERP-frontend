"use client"
import { useEffect, useState } from 'react';
import App from '@/components/student/TableDesign';
import {LocalBackURL} from "@/constants/constants";
import axios from "axios";
const StudentsPage = () => {
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllStudents() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const studentClass = 2;
                // const response = await fetch(LocalBackURL+'/api/students/allstudents', {
                //     method: 'GET',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ school, studentClass }),
                // });

                const response = await axios.get(LocalBackURL+"/api/students/allstudents");
                console.log(response,"response");
                // if (!response.ok) {
                //     throw new Error('Failed to fetch students');
                // }
                // const data = await response.json();
                const data = response.data;
                setStudents(data.students || []); // Set the fetched student data to state
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        fetchAllStudents();
    }, []);

    return (
        <div className='bg-white'>
            <h1>All Students</h1>
            <App data={students} />
        </div>

    );
};

export default StudentsPage;
