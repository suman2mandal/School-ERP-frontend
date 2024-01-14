"use client";
import React from 'react';
import {Formik, Field, Form, ErrorMessage, FieldProps, FieldHookConfig, useField} from 'formik';
import axios from "axios";
import TextField, {TextFieldProps} from '@mui/material/TextField';
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import SectionWrapper from "@/components/Wrapper/SectionWrapper";
import {Autocomplete, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Employee} from "@/datatypes/employees/employee.i";
import {FORM_VALIDATION} from "@/constants/validation/newStaff";
import {indianStates, indianDistricts} from "@/constants/locationdata";

const StaffEntry: any = ({data}: { data:any }) => {
    let initialValues: Employee = {
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

    const isSubmitting = data ? true: false;
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
                    disabled={isSubmitting}
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
                    <InputLabel id="empGender-label">Gender</InputLabel>
                    <Field
                        as={Select}
                        labelId="empGender-label"
                        label="empGender"
                        variant="outlined"
                        name="empGender"
                        placeholder="empGender"
                        disabled={isSubmitting}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Field>
                </FormControl>
                <ErrorMessage name="empGender" component="div" className="text-red-500"/>
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

    const ReligionSelect = () => {
        return (
            <div className="flex flex-col">
                <FormControl variant="outlined" style={{ width: '35ch' }}>
                    <InputLabel id="religion-label">Religion</InputLabel>
                    <Field
                        as={Select}
                        labelId="religion-label"
                        label="religion"
                        variant="outlined"
                        name="religion"
                        placeholder="Religion"
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



    return (
        <LayoutWrapper>
            <h1>Employee Form</h1>
            <Formik
                initialValues={data?data:initialValues}
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
                                disabled={isSubmitting}
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
                                placeholder="Email"
                                style={{width: "35ch"}}
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="empRelativeName" component="div" className="text-red-500"/>
                        </div>
                        <GenderSelect/>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <CustomDateTimePicker
                                id="empDOB"
                                name="empDOB"
                                label="DOB"
                                type="string"
                                style={{ width: "35ch" }}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="empDOB" component="div" className="text-red-500"/>
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                            <ErrorMessage name="religion" component="div" className="text-red-500"/>
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="empSubjectPreffered" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <div className="flex flex-col">
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Profile Link"
                                variant="outlined"
                                name="empProfile"
                                placeholder="Profile Link"
                                style={{width: "35ch"}}
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name="empCV" component="div" className="text-red-500"/>
                        </div>
                    </SectionWrapper>
                    {!data && (<SectionWrapper>
                        <button
                            className="group relative overflow-hidden rounded-l bg-green-500 text-lg font-bold text-white h-14"
                            style={{width: "28ch"}}>
                            Submit
                            <div
                                className="absolute inset-0 h-full w-full scale-0 rounded-l transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                    </SectionWrapper>)}
                </Form>
            </Formik>
        </LayoutWrapper>
    )
};

export default StaffEntry;
