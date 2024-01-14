"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Employee } from '@/datatypes/employees/employee.i';
import { LocalBackURL } from "@/constants/constants";
import StaffEntry from "@/components/staff/StaffEntry";

const EmployeePage = () => {
    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        async function fetchOneEmployee() {
            try {
                const empId = 'EMP001';
                const response = await fetch(LocalBackURL + '/api/emp/singleemp', {
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
                setEmployee(data.employee as Employee);
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        }

        fetchOneEmployee();
    }, []);


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

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center mb-8">
                <div className="rounded-full overflow-hidden w-40 h-40 mt-8">
                    <Image
                        className="rounded-full"
                        src="/employees-icon.jpg"
                        alt="image description"
                        layout="responsive"
                        width={800}
                        height={800}
                    />
                </div>
            </div>
            {employee && <StaffEntry data={initialValues} />}
        </div>
    );



};

export default EmployeePage;
