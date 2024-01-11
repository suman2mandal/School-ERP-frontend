import React from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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

interface AppProps {
    data: DataType[];
    onDelete: (id: string) => void;
}

const App: React.FC<AppProps> = ({ data, onDelete }) => {
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
            dataIndex: 'id',
            render: (id: string) => (
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
                            onClick={() => onDelete(id)}
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
