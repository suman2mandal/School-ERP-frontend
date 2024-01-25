"use client"
import { useEffect, useState } from 'react';
import App from '@/components/student/TableDesign';
import { LocalBackURL } from "@/constants/constants";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
const StudentsPage = () => {
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllStudents() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const studentClass = 2;
                const response = await fetch(LocalBackURL + '/api/students/readAllClassStudents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ school, studentClass }),
                });

                const data = await response.json();
                setStudents(data.students || []);

            } catch (error) {
                console.error('Error fetching ViewStudents:', error);
            }
        }

        fetchAllStudents();
    }, []);

    return (
        <LayoutWrapper>
            <App data={students} />
        </LayoutWrapper>

    );
};

export default StudentsPage;
