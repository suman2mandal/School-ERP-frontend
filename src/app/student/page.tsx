"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LocalBackURL } from "@/constants/constants";
import { Student } from '@/datatypes/student/student.i';
import StudentEntry from "@/components/student/StudentEntry";

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

    let initialValues: Student = {
        registerationNumber: '1',
        registerationDate: '2024-01-31',
        studentClass: 0,
        image: '',
        phoneNumber: '',
        section: '',
        studentName: '',
        fatherName: '',
        motherName: '',
        gender: '',
        dob: '2024-01-31',
        alternatePhoneNumber: '',
        email: '',
        address: '',
        town: '',
        city: '',
        district: 'Angul',
        state: 'Tripura',
        pincode: '',
        bloodGroup: '',
        category: '',
        religion: '',
        landMark: '',
        lastSchoolName: "",
        lastClass: "",
        lastClassScore: "",
        lastClassYear: "",
        lastClassTC: "",
        lastClassReason: "",
        lastClassBoard: "",
        lastClassMedium: "",
        lastClassSchool: "",
        lastClassCity: "",
    };

    return (
        <div className="">
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

            {student && <StudentEntry data={initialValues}/>}
        </div>
    );



};

export default StudentPage;
