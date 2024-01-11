"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Employee {
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
    empProfile: string;
    empDepartment: string;
    empDesignation: string;
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

const EmployeePage = () => {
    const [employee, setEmployee] = useState<any[]>([]);

    useEffect(() => {
        async function fetchOneEmployee() {
            try {
                const empId = 'EMP001';
                const response = await fetch('http://localhost:5000/api/emp/singleemp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ empId }),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }
                const data = await response.json();
                setEmployee(data.employee || []);
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        }

        fetchOneEmployee();
    }, []);

    const headings = [
        "Id",
        "Name",
        "Relative Name",
        "Gender",
        "Date of Birth",
        "Blood Group",
        "Phone Number",
        "Alternate Number",
        "Whatsapp Number",
        "Email",
        "Category",
        "Profile",
        "Department",
        "Designation",
        "Religion",
        "Aadhar Number",
        "Qualification",
        "Class Preffered",
        "Subject Preffered",
        "Bank Name",
        "Bank A/C Number",
        "Bank IFSC",
        "Pan Card Number",
        "Pf Number",
        "Basic Salary",
        "HRA Amount",
        "DA Amount",
        "Allowances",
        "Other Vages",
        "PF Amount",
        "TDS Amount",
        "ESIC Amount",
        "Professional Tax",
        "Address",
        "Village",
        "Block",
        "District",
        "State",
        "Pincode",
        "Land Mark",
        "Sign Photo",
        "Experience",
        "Qualification Photo",
        "Id Proof",
        "Pan Card Photo",
        "Aadhar Card Photo"
    ]

    const fields = [
        'empId',
        'empName',
        'empRelativeName',
        'empGender',
        'empDOB',
        'empBloodGrp',
        'empNumberOne',
        'empNumberTwo',
        'empWhatsappNumber',
        'empEmail',
        'empCategory',
        'empProfile',
        'empDepartment',
        'empDesignation',
        'empReligion',
        'empAadharNumber',
        'empQualification',
        'empClassPreffered',
        'empSubjectPreffered',
        'empBankName',
        'empBankAcNumber',
        'empBankIfscCode',
        'empPanCardNumber',
        'empPfNumber',
        'empBasicSalary',
        'empHraAmount',
        'empDaAmount',
        'empAllowances',
        'empOtherWages',
        'empPfAmount',
        'empTdsAmount',
        'empEsicAmount',
        'empProfessionalTax',
        'empAddress',
        'empVillage',
        'empBlock',
        'empDistrict',
        'empState',
        'empPinCode',
        'empLandMark',
        'empSign',
        'empExperience',
        'empQualificationPhoto',
        'empIdProof',
        'empPanCardPhoto',
        'empAadharCardPhoto',
        'empCV'
    ]

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="outerbox ">
                <div className="outerbox  p-4 flex flex-col items-center">
                    <h1>Employee Details</h1>
                    <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
                        <Image
                            className="rounded-full"
                            src="/employees-icon.jpg"
                            alt="image description"
                            layout="responsive"
                            width={384}
                            height={384}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-4 ">
                    {headings.map((heading, index) => (
                        <div key={index} className="flex flex-col">
                            <h2 className="text-lg font-sans mb-2">{heading}</h2>
                            <span className="field-rectangle h-8 w-48 border border-solid border-gray-300 overflow-hidden overflow-ellipsis flex items-center justify-center italic bg-green-400 font-semibold">
                                {employee && employee.length && employee.length > 0
                                    ? (fields[index] === 'empDOB'
                                        ? new Date((employee[0] as Employee)[fields[index] as keyof Employee]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                                        : (employee[0] as Employee)[fields[index] as keyof Employee]) || "N/A"
                                    : "N/A"}
                            </span>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    );
};

export default EmployeePage;
