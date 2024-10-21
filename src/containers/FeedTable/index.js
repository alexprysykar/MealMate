import React from "react";
import { Table } from "antd";

const dataSource = [
    {
        key: "1",
        name: "Recipe 1",
        description: "Chicken and Pasta",
        ingredients: ["Chicken", "Pasta", "Tomato"],
    },
    {
        key: "2",
        name: "Recipe 2",
        description: "Beef Stew",
        ingredients: ["Beef", "Carrots", "Tomato"],
    },
    {
        key: "3",
        name: "Recipe 3",
        description: "Cheese Pizza",
        ingredients: ["Cheese", "Tomato", "Dough"],
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
];

const FeedTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default FeedTable;