"use client";
import React from 'react';
import {Formik, Field, Form, ErrorMessage, FieldProps, FieldHookConfig, useField} from 'formik';
import axios from "axios";
import TextField, {TextFieldProps} from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import SectionWrapper from "@/components/Wrapper/SectionWrapper";
import {Autocomplete, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface FormValues {
    school: string;
    empName: string;
    empEmail: string;
    empRelativeName: string;
    empGender: string;
    empDOB: Date;
    empNumberOne: string;
    empNumberTwo: string;
    empWhatsappNumber: string;
    empCategory: string;
    empReligion: string;
    empBloodGrp: string;
    empAadharNumber: string;
    empId: string;
    empQualification: string;
    empClassPreffered: string;
    empSubjectPreffered: string;
    empProfile: string;
    empDepartment: string;
    empDesignation: string; //
    empPanCardNumber: string;
    empPfNumber: string;
    empBankName: string;
    empBankAcNumber: string;
    empBankIfscCode: string;
    empBasicSalary: number;
    empHraAmount: number;
    empDaAmount: number;
    empAllowances: number;
    empOtherWages: number;
    empPfAmount: number;
    empTdsAmount: number;
    empEsicAmount: number;
    empProfessionalTax: number;
    empAddress: string;
    empVillage: string;
    empBlock: string;
    empDistrict: string;
    empState: string;
    empPinCode: string;
    empLandMark: string;
    empPhoto: string;
    empSign: string;
    empExperience: string;
    empQualificationPhoto: string;
    empIdProof: string;
    empPanCardPhoto: string;
    empAadharCardPhoto: string;
    empCV: string;
}

const EmployeeForm: React.FC = () => {
    let initialValues: FormValues = {
        school: '',
        empName: '',
        empEmail: '',
        empRelativeName: '',
        empGender: '',
        empDOB: new Date(),
        empNumberOne: '',
        empNumberTwo: '',
        empWhatsappNumber: '',
        empCategory: '',
        empReligion: '',
        empBloodGrp: '',
        empAadharNumber: '',
        empId: '',
        empQualification: '',
        empClassPreffered: '',
        empSubjectPreffered: '',
        empProfile: '',
        empDepartment: '',
        empDesignation: '',
        empPanCardNumber: '',
        empPfNumber: '',
        empBankName: '',
        empBankAcNumber: '',
        empBankIfscCode: '',
        empBasicSalary: 0,
        empHraAmount: 0,
        empDaAmount: 0,
        empAllowances: 0,
        empOtherWages: 0,
        empPfAmount: 0,
        empTdsAmount: 0,
        empEsicAmount: 0,
        empProfessionalTax: 0,
        empAddress: '',
        empVillage: '',
        empBlock: '',
        empDistrict: '',
        empState: '',
        empPinCode: '',
        empLandMark: '',
        empPhoto: '',
        empSign: '',
        empExperience: '',
        empQualificationPhoto: '',
        empIdProof: '',
        empPanCardPhoto: '',
        empAadharCardPhoto: '',
        empCV: '',
    };

    const FORM_VALIDATION = Yup.object().shape({
        empName: Yup.string().required('Employee Name is required'),

        empEmail: Yup.string().email('Invalid email address').required('Email is required'),

        empRelativeName: Yup.string().required('Relative Name is required'),

        empGender: Yup.string().required('Gender is required'),

        empDOB: Yup.date().required('Date of Birth is required'),

        empNumberOne: Yup.string().required('Phone Number is required'),

        empNumberTwo: Yup.string().required('Alternate Phone Number is required'),

        empWhatsappNumber: Yup.string().required('WhatsApp Number is required'),

        empCategory: Yup.string().required('Category is required'),

        empReligion: Yup.string().required('Religion is required'),

        empBloodGrp: Yup.string().required('Blood Group is required'),

        empAadharNumber: Yup.string()
            .matches(/^\d{12}$/, 'Aadhar Number must be exactly 12 digits')
            .required('Aadhar Number is required'),

        empId: Yup.string().required('Employee ID is required'),

        empQualification: Yup.string().required('Qualification is required'),

        empClassPreffered: Yup.string().required('Preferred Class is required'),

        empSubjectPreffered: Yup.string().required('Preferred Subject is required'),

        empProfile: Yup.string().required('Employee Profile is required'),

        empDepartment: Yup.string().required('Department is required'),

        empDesignation: Yup.string().required('Designation is required'),

        empPanCardNumber: Yup.string().required('PAN Card Number is required'),

        empPfNumber: Yup.string().required('PF Number is required'),

        empBankName: Yup.string().required('Bank Name is required'),

        empBankAcNumber: Yup.string().required('Bank Account Number is required'),

        empBankIfscCode: Yup.string().required('Bank IFSC Code is required'),

        empBasicSalary: Yup.number().required('Basic Salary is required'),

        empHraAmount: Yup.number().required('HRA Amount is required'),

        empDaAmount: Yup.number().required('DA Amount is required'),

        empAllowances: Yup.number().required('Allowances are required'),

        empOtherWages: Yup.number().required('Other Wages are required'),

        empPfAmount: Yup.number().required('PF Amount is required'),

        empTdsAmount: Yup.number().required('TDS Amount is required'),

        empEsicAmount: Yup.number().required('ESIC Amount is required'),

        empProfessionalTax: Yup.number().required('Professional Tax is required'),

        empAddress: Yup.string().required('Address is required'),

        empVillage: Yup.string().required('Village is required'),

        empBlock: Yup.string().required('Block is required'),

        empDistrict: Yup.string().required('District is required'),

        empState: Yup.string().required('State is required'),

        empPinCode: Yup.string().required('PIN Code is required'),

        empLandMark: Yup.string().required('Landmark is required'),

        empPhoto: Yup.string().required('Photo URL is required'),

        empSign: Yup.string().required('Signature URL is required'),

        empExperience: Yup.string().required('Experience details are required'),

        empQualificationPhoto: Yup.string().required('Qualification Photo URL is required'),

        empIdProof: Yup.string().required('ID Proof URL is required'),

        empPanCardPhoto: Yup.string().required('PAN Card Photo URL is required'),

        empAadharCardPhoto: Yup.string().required('Aadhar Card Photo URL is required'),

        empCV: Yup.string().required('CV URL is required'),
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
                <Autocomplete
                    id="state"
                    options={indianStates}
                    getOptionLabel={(option) => option}
                    value={field.value}
                    onChange={(_, value) => form.setFieldValue('state', value)}
                    renderInput={(params) => (
                        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />
                    )}
                />
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
                <Autocomplete
                    id="district"
                    options={districts}
                    getOptionLabel={(option) => option}
                    value={field.value}
                    onChange={(_, value) => form.setFieldValue('district', value)}
                    renderInput={(params) => (
                        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />
                    )}
                />
            </FormControl>
            <ErrorMessage name="district" component="div" className="text-red-500" />
        </div>
    );

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

    const CategorySelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '35ch' }}>
                    <InputLabel id="empCategory-label">Category</InputLabel>
                    <Field
                        as={Select}
                        labelId="empCategory-label"
                        label="empCategory"
                        variant="outlined"
                        name="empCategory"
                        placeholder="empCategory"
                    >
                        <MenuItem value="general">GENERAL</MenuItem>
                        <MenuItem value="obc">OBC</MenuItem>
                        <MenuItem value="sc">SC</MenuItem>
                        <MenuItem value="st">ST</MenuItem>
                    </Field>
                </FormControl>
                {/*<ErrorMessage name="gender" component="div" className="text-red-500" />*/}
            </div>
        );
    };

    const ReligionSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '35ch' }}>
                    <InputLabel id="empReligion-label">Religion</InputLabel>
                    <Field
                        as={Select}
                        labelId="empReligion-label"
                        label="empReligion"
                        variant="outlined"
                        name="empReligion"
                        placeholder="empReligion"
                    >
                        <MenuItem value="hindu">Hindu</MenuItem>
                        <MenuItem value="muslim">Muslim</MenuItem>
                        <MenuItem value="sikh">Sikh</MenuItem>
                        <MenuItem value="jain">Jain</MenuItem>
                        <MenuItem value="christian">christian</MenuItem>
                    </Field>
                </FormControl>
                {/*<ErrorMessage name="gender" component="div" className="text-red-500" />*/}
            </div>
        );
    };

    const BloodGroupSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '35ch' }}>
                    <InputLabel id="empBloodGrp-label">Blood Group</InputLabel>
                    <Field
                        as={Select}
                        labelId="empBloodGrp-label"
                        label="empBloodGrp"
                        variant="outlined"
                        name="empBloodGrp"
                        placeholder="BloodGrp"
                    >
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">0-</MenuItem>
                    </Field>
                </FormControl>
                {/*<ErrorMessage name="gender" component="div" className="text-red-500" />*/}
            </div>
        );
    };



    return (
        <LayoutWrapper>
            <h1>Employee Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={FORM_VALIDATION}
                onSubmit={async (values, actions) => {
                    try {
                        const response = await axios.post('/api/employees/register', values);
                        alert('Form submitted successfully');
                    } catch (error) {
                        console.error(error);
                        alert('An error occurred while submitting the form');
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
                            label="Employee Name"
                            variant="outlined"
                            name="empName"
                            placeholder="Employee Name"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empName" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            name="empEmail"
                            placeholder="Employee Email"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empEmail" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Relative Name"
                            variant="outlined"
                            name="empRelativeName"
                            placeholder="Relative Name"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empRelativeName" component="div" className="text-red-500"/>
                    </div>
                    {/*<div className="flex flex-col">*/}
                    {/*    <Field*/}
                    {/*        as={TextField}*/}
                    {/*        id="outlined-basic"*/}
                    {/*        label="Employee Gender"*/}
                    {/*        variant="outlined"*/}
                    {/*        name="empGender"*/}
                    {/*        placeholder="Employee Gender"*/}
                    {/*        style={{width: "35ch"}}*/}
                    {/*    />*/}
                    {/*    <ErrorMessage name="empGender" component="div" className="text-red-500"/>*/}
                    {/*</div>*/}
                    <GenderSelect/>
                    </SectionWrapper>
                    <SectionWrapper>
                    <div className="flex flex-col">
                        {/*<Field*/}
                        {/*    as={TextField}*/}
                        {/*    id="outlined-basic"*/}
                        {/*    label="Date of Birth"*/}
                        {/*    variant="outlined"*/}
                        {/*    name="empDOB"*/}
                        {/*    placeholder="Date of Birth"*/}
                        {/*    style={{width: "35ch"}}*/}
                        {/*/>*/}
                        <CustomDateTimePicker
                            id="dob"
                            name="dob"
                            label="DOB"
                            type="string"
                            style={{ width: "35ch" }}
                        />
                        <ErrorMessage name="dob" component="div" className="text-red-500"/>
                        {/*<ErrorMessage name="empDOB" component="div" className="text-red-500"/>*/}
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Phone Number One"
                            variant="outlined"
                            name="empNumberOne"
                            placeholder="Phone Number One"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empNumberOne" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Phone Number Two"
                            variant="outlined"
                            name="empNumberTwo"
                            placeholder="Phone Number Two"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empNumberTwo" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="WhatsApp Number"
                            variant="outlined"
                            name="empWhatsappNumber"
                            placeholder="WhatsApp Number"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empWhatsappNumber" component="div" className="text-red-500"/>
                    </div>
                    </SectionWrapper>
                    <SectionWrapper>
                    <div className="flex flex-col">
                        <CategorySelect/>
                        <ErrorMessage name="empCategory" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <ReligionSelect/>
                        <ErrorMessage name="empReligion" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <BloodGroupSelect/>
                        <ErrorMessage name="empBloodGrp" component="div" className="text-red-500"/>
                    </div>

                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Aadhar Number"
                            variant="outlined"
                            name="empAadharNumber"
                            placeholder="Aadhar Number"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empAadharNumber" component="div" className="text-red-500"/>
                    </div>
                    </SectionWrapper>
                    <SectionWrapper>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Employee ID"
                            variant="outlined"
                            name="empId"
                            placeholder="Employee ID"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empId" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Qualification"
                            variant="outlined"
                            name="empQualification"
                            placeholder="Qualification"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empQualification" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Preferred Class"
                            variant="outlined"
                            name="empClassPreffered"
                            placeholder="Preferred Class"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empClassPreffered" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Preferred Subject"
                            variant="outlined"
                            name="empSubjectPreffered"
                            placeholder="Preferred Subject"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empSubjectPreffered" component="div" className="text-red-500"/>
                    </div>
                </SectionWrapper>
                <SectionWrapper>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Employee Profile"
                            variant="outlined"
                            name="empProfile"
                            placeholder="Employee Profile"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empProfile" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Department"
                            variant="outlined"
                            name="empDepartment"
                            placeholder="Department"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empDepartment" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Designation"
                            variant="outlined"
                            name="empDesignation"
                            placeholder="Designation"
                            style={{width: "35ch"}}
                        />
                        <ErrorMessage name="empDesignation" component="div" className="text-red-500"/>
                    </div>
                    <div className="flex flex-col">
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="Pan Card Number"
                            variant="outlined"
                            name="empPanCardNumber"
                            placeholder="Pan Card Number"
                            style={{ width: "35ch" }}
                        />
                        <ErrorMessage name="empPanCardNumber" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="PF Number"
                                variant="outlined"
                                name="empPfNumber"
                                placeholder="PF Number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empPfNumber" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Bank Name"
                                variant="outlined"
                                name="empBankName"
                                placeholder="Bank Name"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empBankName" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Bank Account Number"
                                variant="outlined"
                                name="empBankAcNumber"
                                placeholder="Bank Account Number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empBankAcNumber" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Bank IFSC Code"
                                variant="outlined"
                                name="empBankIfscCode"
                                placeholder="Bank IFSC Code"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empBankIfscCode" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Basic Salary"
                                variant="outlined"
                                name="empBasicSalary"
                                placeholder="Basic Salary"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empBasicSalary" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="HRA Amount"
                                variant="outlined"
                                name="empHraAmount"
                                placeholder="HRA Amount"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empHraAmount" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="DA Amount"
                                variant="outlined"
                                name="empDaAmount"
                                placeholder="DA Amount"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empDaAmount" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Allowances"
                                variant="outlined"
                                name="empAllowances"
                                placeholder="Allowances"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empAllowances" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Other Wages"
                                variant="outlined"
                                name="empOtherWages"
                                placeholder="Other Wages"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empOtherWages" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="PF Amount"
                                variant="outlined"
                                name="empPfAmount"
                                placeholder="PF Amount"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empPfAmount" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="TDS Amount"
                                variant="outlined"
                                name="empTdsAmount"
                                placeholder="TDS Amount"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empTdsAmount" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="ESIC Amount"
                                variant="outlined"
                                name="empEsicAmount"
                                placeholder="ESIC Amount"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empEsicAmount" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Professional Tax"
                                variant="outlined"
                                name="empProfessionalTax"
                                placeholder="Professional Tax"
                                type="number"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empProfessionalTax" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                name="empAddress"
                                placeholder="Address"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empAddress" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Village"
                                variant="outlined"
                                name="empVillage"
                                placeholder="Village"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empVillage" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Block"
                                variant="outlined"
                                name="empBlock"
                                placeholder="Block"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empBlock" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="District"
                                variant="outlined"
                                name="empDistrict"
                                placeholder="District"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empDistrict" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="State"
                                variant="outlined"
                                name="empState"
                                placeholder="State"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empState" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Pin Code"
                                variant="outlined"
                                name="empPinCode"
                                placeholder="Pin Code"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empPinCode" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Landmark"
                                variant="outlined"
                                name="empLandMark"
                                placeholder="Landmark"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empLandMark" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Photo"
                                variant="outlined"
                                name="empPhoto"
                                placeholder="Photo"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empPhoto" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Signature"
                                variant="outlined"
                                name="empSign"
                                placeholder="Signature"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empSign" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Experience"
                                variant="outlined"
                                name="empExperience"
                                placeholder="Experience"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empExperience" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Qualification Photo"
                                variant="outlined"
                                name="empQualificationPhoto"
                                placeholder="Qualification Photo"
                                style={{ width: "35ch" }}
                            />
                            <ErrorMessage name="empQualificationPhoto" component="div" className="text-red-500" />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="ID Proof"
                                variant="outlined"
                                name="empIdProof"
                                placeholder="ID Proof"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="empIdProof" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Pan Card Photo"
                                variant="outlined"
                                name="empPanCardPhoto"
                                placeholder="Pan Card Photo"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="empPanCardPhoto" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Aadhar Card Photo"
                                variant="outlined"
                                name="empAadharCardPhoto"
                                placeholder="Aadhar Card Photo"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="empAadharCardPhoto" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="CV"
                                variant="outlined"
                                name="empCV"
                                placeholder="CV"
                                style={{width: "35ch"}}
                            />
                            <ErrorMessage name="empCV" component="div" className="text-red-500"/>
                        </div>
                        {/* Continue adding fields as per your requirements */}


                        <button
                            className="group relative overflow-hidden rounded-l bg-green-500 text-lg font-bold text-white h-14"
                            style={{width: "28ch"}}>
                            Submit
                            <div
                                className="absolute inset-0 h-full w-full scale-0 rounded-l transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                    </SectionWrapper>
                </Form>
            </Formik>
        </LayoutWrapper>
    )
        ;
};

export default EmployeeForm;
