import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
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

    rollNumber: Yup.number()
        .typeError('Roll number must be a number')
        .integer('Roll number must be an integer'),

    aaadharNumber: Yup.string()
        .matches(/^\d{12}$/, 'Aadhar number must be 12 digits'),

    bloodGroup: Yup.string()
        .required('Blood group is required'),

    category: Yup.string()
        .required('Category is required'),

    religion: Yup.string()
        .required('Religion is required'),

});