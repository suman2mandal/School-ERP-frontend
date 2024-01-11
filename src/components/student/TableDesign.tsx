import React from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

//ToDo -- Data will be shown based on user selection - there will be check boxes and he will get the data in table that he selected 

interface DataType {
    key: string;
    name: string;
    regNumber: number;
    class: number;
    phoneNumber: string;
    section: string;
    fatherName: string,
    motherName: string,
    gender: string,
    age: number,


}

interface AppProps {
    data: DataType[];
}

const App: React.FC<AppProps> = ({ data }) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Registeration Number',
            dataIndex: 'registerationNumber',
            key: 'registerationNumber'
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'section'
        },
        {
            title: 'Name',
            dataIndex: 'studentName',
            key: 'name',

        },
        {
            title: 'Father Name',
            dataIndex: 'fatherName',
            key: 'fatherName'
        },
        {
            title: 'Mother Name',
            dataIndex: 'motherName',
            key: 'motherName'
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },

        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (id: string) => (
                <Space size="middle">
                    <Button
                        type="text"
                        style={{ color: 'red' }}
                        onClick={() => { }}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} />);

};

export default App;
