import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlignter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

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
    studentClass: number;
    studentName: string;
    email: string;
    address: string;

}

type DataIndex = keyof DataType;

interface AppProps {
    data: DataType[];
}

const App: React.FC<AppProps> = ({ data }) => {
    const uniqueSections = Array.from(new Set(data.map(item => item.section)));
    const uniqueClasses = Array.from(new Set(data.map(item => item.studentClass)));
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlignter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: ColumnsType<DataType> = [
        {
            title: 'Registeration Number',
            dataIndex: 'registerationNumber',
            key: 'registerationNumber'
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'section',
            filters: uniqueSections.map(section => ({
                text: section,
                value: section,
            })),
            filteredValue: filteredInfo.section || null,
            onFilter: (value: any, record: DataType) => record.section.includes(value),
            ellipsis: true,
        },

        {
            title: 'Name',
            dataIndex: 'studentName',
            key: 'name',
            width: '10%',
            ...getColumnSearchProps('studentName'),

        },
        {
            title: 'Father Name',
            dataIndex: 'fatherName',
            key: 'fatherName',
            width: '10%',
            ...getColumnSearchProps('fatherName'),
        },
        {
            title: 'Mother Name',
            dataIndex: 'motherName',
            key: 'motherName',
            width: '10%',
            ...getColumnSearchProps('motherName'),
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: '10%',
            ...getColumnSearchProps('phoneNumber'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '10%',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],
            filteredValue: filteredInfo.gender || null,
            onFilter: (value: any, record:any):any => record.gender.toLowerCase() === value.toLowerCase()

        },

        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '10%',
            ...getColumnSearchProps('address'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortDirections: ['descend', 'ascend'],
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
        <Table columns={columns} dataSource={data} onChange={(pagination, filters, sorter) => setFilteredInfo(filters)} />);

};

export default App;
