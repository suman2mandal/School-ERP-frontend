"use client";
import React from 'react';
import {Formik,Field,Form,ErrorMessage,FieldProps,FieldHookConfig,useField,FieldAttributes} from 'formik';
import {LocalBackURL} from "@/constants/constants";
import axios from "axios";
import TextField, {TextFieldProps} from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SectionWrapper from "@/components/Wrapper/SectionWrapper";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import {Autocomplete, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FORM_VALIDATION} from "@/constants/validation/newStudents"
import {indianStates, indianDistricts} from "@/constants/locationdata";
import {Student} from "@/datatypes/student/student.i";
import EntryHeaderWrapper from "@/components/Wrapper/EntryHeaderWrapper";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 2,
});


const StudentForm: any = ({data}:{data:any}) => {
    let initialValues: Student = {
        registerationNumber: '',
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

    interface StateDropdownProps extends FieldProps {
        label: string;
        placeholder?: string;
    }
    const StateDropdown: React.FC<StateDropdownProps> = ({ field, form, label, placeholder }) => (
        <div className="flex flex-col">
            <FormControl variant="outlined" style={{ width: '38ch' }}>
                <Autocomplete
                    id="state"
                    options={indianStates}
                    getOptionLabel={(option) => option}
                    value={field.value}
                    onChange={(_, value) => form.setFieldValue('state', value)}
                    renderInput={(params) => (
                        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />
                    )}
                    disabled={isSubmitting}
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
            <FormControl variant="outlined" style={{ width: '38ch' }}>
                <Autocomplete
                    id="district"
                    options={districts}
                    getOptionLabel={(option) => option}
                    value={field.value}
                    onChange={(_, value) => form.setFieldValue('district', value)}
                    renderInput={(params) => (
                        <TextField {...params} label={label} variant="outlined" placeholder={placeholder} />
                    )}
                    disabled={isSubmitting}
                />
            </FormControl>
            <ErrorMessage name="district" component="div" className="text-red-500" />
        </div>
    );

    const GenderSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '38ch' }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Field
                        as={Select}
                        labelId="gender-label"
                        label="Gender"
                        variant="outlined"
                        name="gender"
                        placeholder="Gender"
                        disabled={isSubmitting}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Field>
                </FormControl>
                <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>
        );
    };

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

    const ReligionSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '38ch' }}>
                    <InputLabel id="religion-label">Religion</InputLabel>
                    <Field
                        as={Select}
                        labelId="religion-label"
                        label="religion"
                        variant="outlined"
                        name="religion"
                        placeholder="religion"
                        disabled={isSubmitting}
                    >
                        <MenuItem value="hindu">Hindu</MenuItem>
                        <MenuItem value="muslim">Muslim</MenuItem>
                        <MenuItem value="sikh">Sikh</MenuItem>
                        <MenuItem value="jain">Jain</MenuItem>
                        <MenuItem value="christian">christian</MenuItem>
                    </Field>
                </FormControl>
            </div>
        );
    };

    const CategorySelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '38ch' }}>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Field
                        as={Select}
                        labelId="category-label"
                        label="category"
                        variant="outlined"
                        name="category"
                        placeholder="category"
                        disabled={isSubmitting}
                    >
                        <MenuItem value="general">GENERAL</MenuItem>
                        <MenuItem value="obc">OBC</MenuItem>
                        <MenuItem value="sc">SC</MenuItem>
                        <MenuItem value="st">ST</MenuItem>
                    </Field>
                </FormControl>
            </div>
        );
    };

    const BloodGroupSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '38ch' }}>
                    <InputLabel id="bloodGroup-label">Blood Group</InputLabel>
                    <Field
                        as={Select}
                        labelId="bloodGroup-label"
                        label="bloodGroup"
                        variant="outlined"
                        name="bloodGroup"
                        placeholder="BloodGrp"
                        disabled={isSubmitting}
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
            </div>
        );
    };

    console.log(data,"data");
    const isSubmitting = data ? true: false;

    return (
        <LayoutWrapper>
            <h1>Student Form</h1>
            <Formik
                initialValues={data?data:initialValues}
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
                    actions.resetForm();
                }}
            >

                <Form>
                    <EntryHeaderWrapper>
                        Personal Information:
                    </EntryHeaderWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Student Name"
                                variant="outlined"
                                name="studentName"
                                placeholder="Student Name"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
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
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
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
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="motherName" component="div" className="text-red-500"/>
                        </div>
                        <GenderSelect/>
                        <div className="flex flex-col">
                            <CustomDateTimePicker
                                id="dob"
                                name="dob"
                                label="DOB"
                                type="string"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="dob" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <ReligionSelect/>
                            <ErrorMessage name="religion" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <CategorySelect/>
                            <ErrorMessage name="category" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <BloodGroupSelect/>
                            <ErrorMessage name="bloodGroup" component="div" className="text-red-500"/>
                        </div>
                        {!data && (<div className="flex flex-col w-full">
                            <div className="px-6">
                                <Button component="label" variant="contained" className="w-full p-4"
                                        startIcon={<CloudUploadIcon/>}>
                                    Upload Student Image
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>)}
                    </SectionWrapper>
                    <EntryHeaderWrapper>
                        Contact Information:
                    </EntryHeaderWrapper>

                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Alternate Phone Number"
                                variant="outlined"
                                name="alternatePhoneNumber"
                                placeholder="Alternate Phone Number"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="alternatePhoneNumber" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                name="email"
                                placeholder="Email"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>

                    <EntryHeaderWrapper>
                        Address Information:
                    </EntryHeaderWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                name="address"
                                placeholder="Address"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Town"
                                variant="outlined"
                                name="town"
                                placeholder="Town"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="town" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                name="city"
                                placeholder="City"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                component={DistrictDropdown}
                                name="district"
                                label="Select a district"
                                placeholder="District"
                                districts={indianDistricts}
                                disabled={isSubmitting}
                            />
                        </div>
                        <Field component={StateDropdown} name="state" label="State" placeholder="Select a state"/>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Pincode"
                                variant="outlined"
                                name="pincode"
                                placeholder="Pincode"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="pincode" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Landmark"
                                variant="outlined"
                                name="landMark"
                                placeholder="Landmark"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="landMark" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>
                    <EntryHeaderWrapper>
                        Academic Information:
                    </EntryHeaderWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Registration Number"
                                variant="outlined"
                                name="registerationNumber"
                                placeholder="Registration Number"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
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
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
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
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="studentClass" component="div" className="text-red-500"/>
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Section"
                                variant="outlined"
                                name="section"
                                placeholder="Section"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="section" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>



                    <EntryHeaderWrapper>
                        Previous school Information:
                    </EntryHeaderWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last School Name"
                                variant="outlined"
                                name="lastSchoolName"
                                placeholder="Last School Name"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last Class"
                                variant="outlined"
                                name="lastClass"
                                placeholder="Last Class"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class Score */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last Class Score"
                                variant="outlined"
                                name="lastClassScore"
                                placeholder="Last Class Score"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class Year */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last passing Year"
                                variant="outlined"
                                name="lastClassYear"
                                placeholder="Last passing Year"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class TC */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last school TC"
                                variant="outlined"
                                name="lastClassTC"
                                placeholder="Last school TC"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class Reason */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="School changing Reason"
                                variant="outlined"
                                name="lastClassReason"
                                placeholder="School changing Reason"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class Board */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last School Board"
                                variant="outlined"
                                name="lastClassBoard"
                                placeholder="Last School Board"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Last Class Medium */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last school medium"
                                variant="outlined"
                                name="lastClassMedium"
                                placeholder="Last school medium"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                                />
                        </div>

                        {/* Last Class School */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last Class School"
                                variant="outlined"
                                name="lastClassSchool"
                                placeholder="Last Class School"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="lastClassSchool" component="div" className="text-red-500"/>
                        </div>

                        {/* Last Class City */}
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Last Class City"
                                variant="outlined"
                                name="lastClassCity"
                                placeholder="Last Class City"
                                style={{width: '38ch'}}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="lastClassCity" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>
                    {!data && (<SectionWrapper>
                        <button
                            className="group relative overflow-hidden rounded-l bg-green-500 text-lg font-bold text-white h-14"
                            style={{width: "28ch"}} type="submit">
                            Submit
                            <div
                                className="absolute inset-0 h-full w-full scale-0 rounded-l transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                        {/*<Button type="button" onClick={() => handleReset()}>Clear Form</Button>*/}

                    </SectionWrapper>)}
                </Form>
            </Formik>
        </LayoutWrapper>
    );
};

export default StudentForm;
