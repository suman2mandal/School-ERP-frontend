import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
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

    empPfNumber: Yup.number()
        .typeError('PF Number must be a number')
        .positive('PF Number must be a positive number')
        .required('PF Number is required'),

    empBankName: Yup.string().required('Bank Name is required'),

    empBankAcNumber: Yup.number()
        .typeError('Bank Account Number must be a number')
        .positive('Bank Account Number must be a positive number')
        .required('Bank Account Number is required'),

    empBankIfscCode: Yup.string().required('Bank IFSC Code is required'),

    empBasicSalary: Yup.number()
        .typeError('Basic Salary must be a number')
        .positive('Basic Salary must be a positive number')
        .required('Basic Salary is required'),

    empHraAmount: Yup.number()
        .typeError('HRA Amount must be a number')
        .positive('HRA Amount must be a positive number')
        .required('HRA Amount is required'),

    empDaAmount: Yup.number()
        .typeError('DA Amount must be a number')
        .positive('DA Amount must be a positive number')
        .required('DA Amount is required'),

    empAllowances: Yup.number()
        .typeError('Allowances must be a number')
        .positive('Allowances must be a positive number')
        .required('Allowances are required'),

    empOtherWages: Yup.number()
        .typeError('Other Wages must be a number')
        .positive('Other Wages must be a positive number')
        .required('Other Wages are required'),

    empPfAmount: Yup.number()
        .typeError('PF Amount must be a number')
        .positive('PF Amount must be a positive number')
        .required('PF Amount is required'),


    empTdsAmount: Yup.number()
        .typeError('TDS Amount must be a number')
        .positive('TDS Amount must be a positive number')
        .required('TDS Amount is required'),

    empEsicAmount: Yup.number()
        .typeError('ESIC Amount must be a number')
        .positive('ESIC Amount must be a positive number')
        .required('ESIC Amount is required'),

    empProfessionalTax: Yup.number()
        .typeError('Professional Tax must be a number')
        .positive('Professional Tax must be a positive number')
        .required('Professional Tax is required'),

    empAddress: Yup.string().required('Address is required'),

    empVillage: Yup.string().required('Village is required'),

    empBlock: Yup.string().required('Block is required'),

    empDistrict: Yup.string().required('District is required'),

    empState: Yup.string().required('State is required'),

    empPinCode: Yup.string()
        .matches(/^\d{6}$/, 'Invalid Pincode. Must be 6 digits')
        .required('Pincode is required'),

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