import React from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from "axios";
import {LocalBackURL} from "@/constants/constants";

//ToDo -- Data will be shown based on user selection - there will be check boxes and he will get the data in table that he selected 

interface DataType {
    key: string;
    name: string;
    empId: string;
    email: string;
    empName: string;
    phoneNumber: string;
    empDepartment: string,
    empDesignation: string,

}

const handleDelete = (_id: string) => {
    try {
        // const response = await fetch('http://localhost:5000/api/emp/deleteemp', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ id }),
        // });
        // if (!response.ok) {
        //     throw new Error('Failed to delete employee');
        // }

        console.log(_id);

        (async () => {
            try{
                const response = await axios.post(LocalBackURL + '/api/emp/deleteemp',{
                    _id: _id
                });

            }catch(e){
                console.log("Error!")
            }
        })();

        // console.log(employees.filter((employee) => employee.empId === employee.empId))
        // setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
};

interface AppProps {
    data: DataType[];
}

const App: React.FC<AppProps> = ({ data }) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Employee Id',
            dataIndex: 'empId',
            key: 'empId'
        },
        {
            title: 'Employee Name',
            dataIndex: 'empName',
            key: 'empName'
        },
        {
            title: 'Contact No',
            dataIndex: 'empNumberOne',
            key: 'empno',

        },
        {
            title: 'Email',
            dataIndex: 'empEmail',
            key: 'empEmail'
        },
        {
            title: 'Relative Name',
            dataIndex: 'empRelativeName',
            key: 'motherName'
        },
        {
            title: 'Department',
            dataIndex: 'empDepartment',
            key: 'phoneNumber'
        },
        {
            title: 'Designation',
            dataIndex: 'empDesignation',
            key: 'empDesignation'
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            render: (_id: string) => (
                <>
                    <Space size="middle">
                        <Button
                            type="text"
                            style={{ color: 'green', border: '1px green solid', backgroundColor: 'lightcyan' }}
                            onClick={() => { }}
                        >
                            Update
                        </Button>
                    </Space>
                    <Space size="middle">
                        <Button
                            type="text"
                            style={{ color: 'red', border: '1px red solid', marginLeft: '8px', backgroundColor: 'lightgoldenrodyellow' }}
                            onClick={()=>{handleDelete(_id)}}
                        >
                            Delete
                        </Button>
                    </Space>
                </>
            ),
        },

    ];

    return (
        <Table columns={columns} dataSource={data} />);

};

export default App;
