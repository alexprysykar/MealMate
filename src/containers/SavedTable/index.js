import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

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
