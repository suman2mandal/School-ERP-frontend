"use client"
import { useEffect, useState } from 'react';
import App from '@/components/allstudents/TableDesign';
import { LocalBackURL } from "@/constants/constants";
const StudentsPage = () => {
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllStudents() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const response = await fetch(LocalBackURL + '/api/students/allstudents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ school }),
                });

                const data = await response.json();
                setStudents(data.students || []);

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
