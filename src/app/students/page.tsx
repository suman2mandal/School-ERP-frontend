"use client"
import { useEffect, useState } from 'react';
import App from '@/components/student/TableDesign';

const StudentsPage = () => {
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllStudents() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const studentClass = 12;
                const response = await fetch('http://localhost:5000/api/students/allstudents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ school, studentClass }),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }
                const data = await response.json();
                setStudents(data.students || []); // Set the fetched student data to state
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        fetchAllStudents();
    }, []);

    return (
        <div>
            <h1>All Students</h1>
            <App data={students} />
        </div>

    );
};

export default StudentsPage;
