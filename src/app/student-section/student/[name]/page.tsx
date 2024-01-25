"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LocalBackURL } from "@/constants/constants";
import { Student } from '@/datatypes/student/student.i';
import StudentEntry from "@/components/student/StudentEntry";
import axios from "axios";

const StudentPage = ({params}:any) => {

    const [student, setStudent] = useState<Student | any | null>(null);

    useEffect(() => {
        async function fetchOneStudent() {
            try {
                const response = await axios.post(LocalBackURL+"/api/v1/students/oneStudent",{
                    "registerationNumber": params.name
                })
                const data = await response.data;
                setStudent(data.student || null);
            } catch (error) {
                console.error('Error fetching ViewStudents:', error);
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

    initialValues = student || initialValues;

    return (
        <>
            {student && <StudentEntry data={initialValues}/>}
        </>
    );



};

export default StudentPage;
