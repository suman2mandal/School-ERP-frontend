"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LocalBackURL } from "@/constants/constants";
import { headings, fields } from '@/constants/studentinfo';
import { Student } from '@/datatypes/student/student.i';
import { Formik, Field, Form } from 'formik';
import TextField from '@mui/material/TextField';
import { useFormikContext } from 'formik';

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
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center ">
                <div className="mb-8">
                    <div className="rounded-full overflow-hidden w-40 h-40 mt-10">
                        <Image
                            className="rounded-full"
                            src="/student-icon.png"
                            alt="image description"
                            layout="responsive"
                            width={800}
                            height={800}
                        />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-4 gap-8 ">
                {headings.map((heading, index) => (
                    <div key={index} className="flex flex-col">
                        <h2 className="text-lg font-sans mb-2 z-10 relative top-6 text-blue-600">
                            <div className='bg-white p-1 inline-block deco ml-5'>
                                {heading}
                            </div>
                        </h2>
                        <span className="field-rectangle h-16 border border-solid border-gray-300 overflow-hidden overflow-ellipsis flex items-center justify-center mb-[-4ch]" style={{ width: "35ch" }}>
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
    );



};

export default StudentPage;
