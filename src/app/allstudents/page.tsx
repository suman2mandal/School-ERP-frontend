"use client"
import { useEffect, useState } from 'react';
import App from '@/components/allstudents/TableDesign';
import axios from 'axios';
import { LocalBackURL } from "@/constants/constants";
const StudentsPage = () => {
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllStudents() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const response = await axios.get(LocalBackURL + '/api/v1/students/allStudents');

                const data = response.data;
                // console.log(data,"data");
                setStudents(data.students || []);

            } catch (error) {
                console.error('Error fetching ViewStudents:', error);
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
