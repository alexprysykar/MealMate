import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
  },
];

const SavedTable = ({ recipes, loading }) => {
  return (
    <div>
      <Table dataSource={recipes} columns={columns} loading={loading} />
    </div>
  );
};

SavedTable.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SavedTable;
