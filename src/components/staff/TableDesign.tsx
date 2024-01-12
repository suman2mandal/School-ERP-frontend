import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlignter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';

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

type DataIndex = keyof DataType;

interface AppProps {
    data: DataType[];
}

const App: React.FC<AppProps> = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

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
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
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
            title: 'Employee Id',
            dataIndex: 'empId',
            key: 'empId',
            width: '10%',
            ...getColumnSearchProps('empId'),
        },
        {
            title: 'Employee Name',
            dataIndex: 'empName',
            key: 'empName',
            width: '10%',
            ...getColumnSearchProps('empName'),
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
            title: 'Father/Spouse Name',
            dataIndex: 'empRelativeName',
            key: 'motherName'
        },
        {
            title: 'Department',
            dataIndex: 'empDepartment',
            key: 'phoneNumber',
            width: '10%',
            ...getColumnSearchProps('empDepartment'),
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
                            onClick={() => { }}
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
