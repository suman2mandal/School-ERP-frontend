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
        <div className="flex flex-col items-center justify-center ">
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

            <div className="grid grid-cols-4 gap-2">
                {headings.map((heading, index) => (
                    <div key={index} className="flex flex-col items-left">
                        <h2 className="text-lg font-sans mb-2 z-10 relative top-6 text-blue-600 ">
                            <div className='bg-white p-1 inline-block deco ml-2'>
                                {heading}
                            </div>
                        </h2>
                        <span className="field-rectangle h-16 w-64 border border-solid border-gray-300 overflow-hidden overflow-ellipsis flex items-center justify-center mb-[-2ch]" style={{ width: "35ch" }}>
                            {employee && employee.length && employee.length > 0
                                ? fields[index] === 'empDOB'
                                    ? new Date((employee[0] as Employee)[fields[index] as keyof Employee]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                                    : String((employee[0] as Employee)[fields[index] as keyof Employee]) || "N/A"
                                : "N/A"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );



};

export default EmployeePage;
