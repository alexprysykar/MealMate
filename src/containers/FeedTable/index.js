import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

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

const FeedTable = ({ recipes, loading }) => {
  return (
    <div>
      <Table dataSource={recipes} columns={columns} loading={loading} />
    </div>
  );
};

FeedTable.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FeedTable;
