import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        name: 'Recipe 1',
        description: 'Description of Recipe 1',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
];

const SavedTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default SavedTable;
