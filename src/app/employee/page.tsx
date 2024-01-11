"use client"
import { useEffect, useState } from 'react';
import App from '@/components/staff/TableDesign';

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
                setEmployee(data.employee || []); // Set the fetched student data to state
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        }

        fetchOneEmployee();
    }, []);

    return (
        <div className='bg-white'>
            <h1>All Employees</h1>
            <App data={employee} />
        </div>

    );
};

export default EmployeePage;
