"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { headings, fields } from '@/constants/empinfo';
import { Employee } from '@/datatypes/employees/employee.i';

import { LocalBackURL } from "@/constants/constants";

const EmployeePage = () => {
    const [employee, setEmployee] = useState<any[]>([]);

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
                setEmployee(data.employee || []);
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        }

        fetchOneEmployee();
    }, []);



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
                                        : String((employee[0] as Employee)[fields[index] as keyof Employee])) || "N/A"
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
