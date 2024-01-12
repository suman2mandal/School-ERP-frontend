"use client";
import React, {useEffect} from 'react';
import {Formik, Field, Form, ErrorMessage, FieldProps, useFormikContext, FieldHookConfig, useField} from 'formik';
import {LocalBackURL} from "@/constants/constants";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import SectionWrapper from "@/components/Wrapper/SectionWrapper";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface FormValues {
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
    alternatePhoneNumber: string;
    email: string;
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
        alternatePhoneNumber: '9050261076',
        email: 'hrohilla2k4@gmail.com',
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
        registerationNumber: Yup.string()
            .required('Registration Number is required'),

        registerationDate: Yup.date()
            .required('Registration Date is required'),

        studentClass: Yup.number()
            .typeError('Student Class must be a number')
            .positive('Student Class must be a positive number')
            .required('Student Class is required'),

        image: Yup.string()
            .url('Invalid Image URL')
            .required('Image URL is required'),

        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
            .required('Phone Number is required'),

        section: Yup.string()
            .required('Section is required'),

        studentName: Yup.string()
            .required('Student Name is required'),

        fatherName: Yup.string()
            .required("Father's Name is required"),

        motherName: Yup.string()
            .required("Mother's Name is required"),

        gender: Yup.string()
            .oneOf(['Male', 'Female', 'Other'], 'Invalid gender')
            .required('Gender is required'),

        dob: Yup.date()
            .required('Date of Birth is required'),

        alternatePhoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Alternate Phone Number must be exactly 10 digits')
            .required('Alternate Phone Number is required'),

        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),

        address: Yup.string()
            .required('Address is required'),

        town: Yup.string()
            .required('Town is required'),

        city: Yup.string()
            .required('City is required'),

        district: Yup.string()
            .required('District is required'),

        state: Yup.string()
            .required('State is required'),

        pincode: Yup.string()
            .matches(/^\d{6}$/, 'Invalid Pincode. Must be 6 digits')
            .required('Pincode is required'),

        landMark: Yup.string()
            .required('Landmark is required'),
    });


    const indianStates: string[] = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Arunachal Pradesh',
        'Jammu and Kashmir',
        'Ladakh',
        'Delhi',
        'Puducherry',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep'
    ];
    const indianDistricts: string[] = [
        'Adilabad', 'Agra', 'Ahmedabad', 'Ahmednagar', 'Aizawl', 'Ajmer', 'Akola', 'Alappuzha', 'Aligarh', 'Alirajpur',
        'Allahabad', 'Almora', 'Alwar', 'Ambala', 'Ambedkar Nagar', 'Amravati', 'Amreli', 'Amritsar', 'Amroha', 'Anand',
        'Anantapur', 'Anantnag', 'Angul', 'Anjaw', 'Anuppur', 'Araria', 'Ariyalur', 'Arwal', 'Ashoknagar', 'Auraiya'];

    interface StateDropdownProps extends FieldProps {
        label: string;
        placeholder?: string;
    }
    const StateDropdown: React.FC<StateDropdownProps> = ({ field, form, label, placeholder }) => (
        <div className="flex flex-col">
            <FormControl variant="outlined" style={{ width: '35ch' }}>
                {/*<Autocomplete*/}
                {/*    id="state"*/}
                {/*    options={indianStates}*/}
                {/*    getOptionLabel={(option) => option}*/}
                {/*    value={field.value}*/}
                {/*    onChange={(_, value) => form.setFieldValue('state', value)}*/}
                {/*    renderInput={(params) => (*/}
                {/*        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />*/}
                {/*    )}*/}
                {/*/>*/}
            </FormControl>
            <ErrorMessage name="state" component="div" className="text-red-500" />
        </div>
    );

    interface DistrictDropdownProps extends FieldProps {
        label: string;
        placeholder?: string;
        districts: string[];
    }

    const DistrictDropdown: React.FC<DistrictDropdownProps> = ({ field, form, label, placeholder, districts }) => (
        <div className="flex flex-col">
            <FormControl variant="outlined" style={{ width: '35ch' }}>
                {/*<Autocomplete*/}
                {/*    id="district"*/}
                {/*    options={districts}*/}
                {/*    getOptionLabel={(option) => option}*/}
                {/*    value={field.value}*/}
                {/*    onChange={(_, value) => form.setFieldValue('district', value)}*/}
                {/*    renderInput={(params) => (*/}
                {/*        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />*/}
                {/*    )}*/}
                {/*/>*/}
            </FormControl>
            <ErrorMessage name="district" component="div" className="text-red-500" />
        </div>
    );

    const GenderSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '35ch' }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Field
                        as={Select}
                        labelId="gender-label"
                        label="Gender"
                        variant="outlined"
                        name="gender"
                        placeholder="Gender"
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Field>
                </FormControl>
                {/*<ErrorMessage name="gender" component="div" className="text-red-500" />*/}
            </div>
        );
    };

    interface CalendarFieldProps extends FieldProps {
        // Add any specific props you need
    }

    // const BasicDateCalendar= ()=> {
    //     return (
    //         <LocalizationProvider dateAdapter={AdapterDayjs}>
    //             <DateCalendar />
    //         </LocalizationProvider>
    //     );
    // }

    type MyFieldHookConfig = FieldHookConfig<string> & { name: string };

    type DateTimePickerProps = MyFieldHookConfig &
        TextFieldProps & {
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };

    const CustomDateTimePicker: React.FC<DateTimePickerProps> = ({
                                                                     name,
                                                                     onChange,
                                                                     ...otherProps
                                                                 }) => {
        const [field, meta] = useField(name);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event); // handle field onChange
            if (onChange) {
                onChange(event); // Forward the onChange event if provided
            }
        };

        const configDateTimePicker: any = {
            ...field,
            ...otherProps,
            type: "date",
            variant: "outlined",
            fullWidth: true,
            InputLabelProps: {
                shrink: true,
            },
            onChange: handleChange,
        };

        if (meta && meta.touched && meta.error) {
            configDateTimePicker.error = true;
            configDateTimePicker.helperText = meta.error;
        }

        return <TextField {...configDateTimePicker} />;
    };

    return (
        
        <div className="px-8 py-5">
        <LayoutWrapper>
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
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Student Name"
                                variant="outlined"
                                name="studentName"
                                placeholder="Student Name"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="studentName" component="div" className="text-red-500"/>
                        </div>

                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Father's Name"
                                variant="outlined"
                                name="fatherName"
                                placeholder="Father's Name"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="fatherName" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Mother's Name"
                                variant="outlined"
                                name="motherName"
                                placeholder="Mother's Name"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="motherName" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Registration Number"
                                variant="outlined"
                                name="registerationNumber"
                                placeholder="Registration Number"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="registerationNumber" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Registration Date"
                                variant="outlined"
                                name="registerationDate"
                                placeholder="Registration Date"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="registerationDate" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Student Class"
                                variant="outlined"
                                name="studentClass"
                                placeholder="Student Class"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="studentClass" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Image URL"
                                variant="outlined"
                                name="image"
                                placeholder="Image URL"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="image" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Section"
                                variant="outlined"
                                name="section"
                                placeholder="Section"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="section" component="div" className="text-red-500"/>
                        </div>
                        {/*<div className="flex flex-col">*/}
                        {/*    <Field*/}
                        {/*        as={TextField}*/}
                        {/*        id="outlined-basic"*/}
                        {/*        label="Gender"*/}
                        {/*        variant="outlined"*/}
                        {/*        name="gender"*/}
                        {/*        placeholder="Gender"*/}
                        {/*        style={{width: "35ch"}}*/}
                        {/*    />*/}
                        {/*    <ErrorMessage name="gender" component="div" className="text-red-500" />*/}
                        {/*</div>*/}

                        {/*GenderSelect*/}
                        {/*<Field*/}
                        {/*    component={GenderSelect}*/}
                        {/*    name="gender"*/}
                        {/*    label="Gender"*/}
                        {/*    placeholder="Gender"*/}
                        {/*    districts={indianDistricts}*/}
                        {/*/>*/}
                        <GenderSelect/>


                        {/*<div className="flex flex-col">*/}
                        {/*    <Field*/}
                        {/*        as={TextField}*/}
                        {/*        id="outlined-basic"*/}
                        {/*        label="Date of Birth"*/}
                        {/*        variant="outlined"*/}
                        {/*        name="dob"*/}
                        {/*        placeholder="Date of Birth"*/}
                        {/*        style={{width: "35ch"}}*/}
                        {/*    />*/}
                        {/*    <ErrorMessage name="dob" component="div" className="text-red-500" />*/}
                        {/*</div>*/}
                        {/*<Field component={CalendarField} name="dob" />*/}
                        <div className="flex flex-col">
                            {/*<DateCalendar*/}
                            {/*    value={formik.values.dob}*/}
                            {/*    onChange={value => formik.setFieldValue('dob', value)}*/}
                            {/*/>*/}
                            {/*<ErrorMessage name="dob" component="div" className="text-red-500"/>*/}
                            <CustomDateTimePicker
                                id="dob"
                                name="dob"
                                label="DOB"
                                type="string"
                                style={{ width: "35ch" }}
                            />
                        </div>

                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Alternate Phone Number"
                                variant="outlined"
                                name="alternatePhoneNumber"
                                placeholder="Alternate Phone Number"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="alternatePhoneNumber" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                name="email"
                                placeholder="Email"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                name="address"
                                placeholder="Address"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Town"
                                variant="outlined"
                                name="town"
                                placeholder="Town"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="town" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                name="city"
                                placeholder="City"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            {/*    <Field*/}
                            {/*        as={TextField}*/}
                            {/*        id="outlined-basic"*/}
                            {/*        label="District"*/}
                            {/*        variant="outlined"*/}
                            {/*        name="district"*/}
                            {/*        placeholder="District"*/}
                            {/*        style={{width: "35ch"}}*/}
                            {/*    />*/}
                            {/*    <ErrorMessage name="district" component="div" className="text-red-500" />*/}
                            {/*</div>*/}
                            <Field
                                component={DistrictDropdown}
                                name="district"
                                placeholder="District"
                                style={{ width: "35ch" }}
                            />
                        </div>
                    </SectionWrapper>
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
        </LayoutWrapper>
        </div>
    );
};

export default StudentForm;
