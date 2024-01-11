"use client";
import React, {useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import {LocalBackURL} from "@/constants/constants";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

interface FormValues {
    school: string;
    registerationNumber: string;
    registerationDate: Date;
    studentClass: number;
    image: string;
    phoneNumber: string;
    section: string;
    studentName: string;
    fatherName: string;
    motherName: string;
    gender: string;
    dob: Date;
    age: number;
    alternatePhoneNumber: string;
    email: string;
    monthlyFees: number;
    address: string;
    town: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    landMark: string;
}

const StudentForm: React.FC = () => {
    let initialValues: FormValues = {
        school: '659790d29d43fe7d1758bbda',
        registerationNumber: '220',
        registerationDate: new Date('2024-01-31T18:30:00.000Z'),
        studentClass: 2,
        image: 'https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png',
        phoneNumber: '8684809123',
        section: 'Ruby',
        studentName: 'aarav',
        fatherName: 'moni',
        motherName: 'sarita',
        gender: 'male',
        dob: new Date('2024-03-31T18:30:00.000Z'),
        age: 7,
        alternatePhoneNumber: '9050261076',
        email: 'hrohilla2k4@gmail.com',
        monthlyFees: 2400,
        address: 'patel nagar gali no 2',
        town: 'patel nagar',
        city: 'delhi',
        district: 'haryana',
        state: 'haryana',
        pincode: '131001',
        landMark: 'Bhasin cement store',
    };

    // useEffect(() => {
    //     let response:FormValues;
    //     const fetchData = async () => {
    //         try {
    //             response = await axios.get(LocalBackURL + '/api/students/allstudents');
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     }
    //     fetchData();
    //     // initialValues = response.data;
    // }, []);

    const FORM_VALIDATION = Yup.object().shape({
        registerationNumber: Yup.string().required('Registration Number is required'),
        registerationDate: Yup.date().required('Registration Date is required'),
        studentClass: Yup.number().required('Student Class is required'),
        image: Yup.string().url('Invalid Image URL').required('Image URL is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        section: Yup.string().required('Section is required'),
        studentName: Yup.string().required('Student Name is required'),
        fatherName: Yup.string().required("Father's Name is required"),
        motherName: Yup.string().required("Mother's Name is required"),
        gender: Yup.string().required('Gender is required'),
        dob: Yup.date().required('Date of Birth is required'),
        age: Yup.number().required('Age is required'),
        alternatePhoneNumber: Yup.string().required('Alternate Phone Number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        monthlyFees: Yup.number().required('Monthly Fees is required'),
        address: Yup.string().required('Address is required'),
        town: Yup.string().required('Town is required'),
        city: Yup.string().required('City is required'),
        district: Yup.string().required('District is required'),
        state: Yup.string().required('State is required'),
        pincode: Yup.string().required('Pincode is required'),
        landMark: Yup.string().required('Landmark is required'),
    });


    return (
        <div className="px-8 py-5">
            <h1>Student Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={FORM_VALIDATION}
                onSubmit={async (values, actions) => {
                    console.log(values,"values");
                    try {
                        const response = await axios.post(LocalBackURL + '/api/students/register', values);

                        // alert('Form submitted successfully');
                    } catch (error) {
                        console.error(error);
                        // alert('An error occurred while submitting the form');
                    }
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="Student Name"
                            variant="outlined"
                            name="studentName"
                            placeholder="Student Name"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Father's Name"
                            variant="outlined"
                            name="fatherName"
                            placeholder="Father's Name"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Mother's Name"
                            variant="outlined"
                            name="motherName"
                            placeholder="Mother's Name"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="School"
                            variant="outlined"
                            name="school"
                            placeholder="School"
                            style={{ width: "35ch" }}
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="Registration Number"
                            variant="outlined"
                            name="registerationNumber"
                            placeholder="Registration Number"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Registration Date"
                            variant="outlined"
                            name="registerationDate"
                            placeholder="Registration Date"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Student Class"
                            variant="outlined"
                            name="studentClass"
                            placeholder="Student Class"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Image URL"
                            variant="outlined"
                            name="image"
                            placeholder="Image URL"
                            style={{ width: "35ch" }}
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Section"
                            variant="outlined"
                            name="section"
                            placeholder="Section"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Gender"
                            variant="outlined"
                            name="gender"
                            placeholder="Gender"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Date of Birth"
                            variant="outlined"
                            name="dob"
                            placeholder="Date of Birth"
                            style={{ width: "35ch" }}
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="Age"
                            variant="outlined"
                            name="age"
                            placeholder="Age"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Alternate Phone Number"
                            variant="outlined"
                            name="alternatePhoneNumber"
                            placeholder="Alternate Phone Number"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            name="email"
                            placeholder="Email"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Monthly Fees"
                            variant="outlined"
                            name="monthlyFees"
                            placeholder="Monthly Fees"
                            style={{ width: "35ch" }}
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            name="address"
                            placeholder="Address"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Town"
                            variant="outlined"
                            name="town"
                            placeholder="Town"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            name="city"
                            placeholder="City"
                            style={{ width: "35ch" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="District"
                            variant="outlined"
                            name="district"
                            placeholder="District"
                            style={{ width: "35ch" }}
                        />
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8">
                        <TextField
                            id="outlined-basic"
                            label="State"
                            variant="outlined"
                            name="state"
                            placeholder="State"
                            style={{width: "35ch"}}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Pincode"
                            variant="outlined"
                            name="pincode"
                            placeholder="Pincode"
                            style={{width: "35ch"}}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Landmark"
                            variant="outlined"
                            name="landMark"
                            placeholder="Landmark"
                            style={{width: "35ch"}}
                        />

                        {/*<Button variant="contained" color="success" style={{width: "35ch", height: "100%"}}>*/}
                        {/*    Submit*/}
                        {/*</Button>*/}
                        <button
                            className="group relative overflow-hidden rounded-l bg-green-500 text-lg font-bold text-white h-full" style={{width: "28ch"}}>
                            Submit
                            <div
                                className="absolute inset-0 h-full w-full scale-0 rounded-l transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                        {/*<Button variant="contained" disableElevation>*/}
                        {/*    */}
                        {/*</Button>*/}
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
