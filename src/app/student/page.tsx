"use client"
import { useEffect, useState } from 'react';
import App from '@/components/student/TableDesign';

const StudentsPage = () => {
    const [student, setStudent] = useState<any[]>([]);

    useEffect(() => {
        async function fetchOneStudent() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const registerationNumber = 259;
                const response = await fetch('http://localhost:5000/api/students/onestudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ school, registerationNumber }),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }
                const data = await response.json();
                setStudent(data.student || []); // Set the fetched student data to state
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        fetchOneStudent();
    }, []);

    return (
        <div>
            <h1>Found Student!</h1>
            <App data={student} />
        </div>

    );
};

export default StudentsPage;
