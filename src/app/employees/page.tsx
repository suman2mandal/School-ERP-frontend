"use client"
import { useEffect, useState } from 'react';
import App from '@/components/staff/TableDesign';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllEmployees() {
            try {
                const school = '65978b0244b69d6782a57d71';
                const response = await fetch('http://localhost:5000/api/emp/reademployees', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ school }),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }
                const data = await response.json();
                setEmployees(data.employees || []); // Set the fetched student data to state
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        }
        fetchAllEmployees();
    }, []);
    const handleDelete = async (id: string) => {
        try {
            const response = await fetch('http://localhost:5000/api/emp/deleteemp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }

            console.log(employees.filter((employee) => employee.empId === employee.empId))
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };


    return (
        <div className='bg-white'>
            <h1>All Employees</h1>
            <App data={employees} onDelete={handleDelete} />
        </div>

    );
};

export default EmployeesPage;
