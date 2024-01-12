"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LocalBackURL } from "@/constants/constants";
import { headings, fields } from '@/constants/studentinfo';
import { Student } from '@/datatypes/student/student.i';

const StudentPage = () => {
    const [student, setStudent] = useState<Student | any | null>(null);

    useEffect(() => {
        async function fetchOneStudent() {
            try {
                const school = '659790d29d43fe7d1758bbda';
                const registerationNumber = 259;
                const response = await fetch(LocalBackURL + '/api/students/onestudent', {
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
                setStudent(data.student || null);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        fetchOneStudent();
    }, []);



    return (
        <div className="flex items-center justify-center h-screen">
            <div className="outerbox border border-solid border-black p-4">
                <div className="outerbox  p-4 flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
                        <Image
                            className="rounded-full"
                            src="/student-icon.png"
                            alt="image description"
                            layout="responsive"
                            width={384}
                            height={384}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 gap-y-6">
                    {headings.map((heading, index) => (
                        <div key={index} className="flex flex-col">
                            <h2 className="text-lg font-sans mb-2">{heading}</h2>
                            <span className="field-rectangle h-8 w-48 border border-solid border-gray-300 overflow-hidden overflow-ellipsis flex items-center justify-center italic bg-slate-400">
                                {student && student.length && student.length > 0
                                    ? fields[index] === 'registerationDate' || fields[index] === 'dob'
                                        ? (student[0] as Student)[fields[index] as keyof Student]
                                            ? new Date((student[0] as Student)[fields[index] as keyof Student] as string).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                                            : "N/A"
                                        : (student[0] as Student)[fields[index] as keyof Student] ?? "N/A"
                                    : "N/A"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentPage;
