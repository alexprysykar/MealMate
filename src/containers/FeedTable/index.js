import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "antd";
import { deleteRecipe } from "../../api/recipes";
import { useRequest } from "ahooks";

const FeedTable = ({ recipes, loading }) => {
  const { run: removeRecipe } = useRequest(deleteRecipe, {
    manual: true,
  });

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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" danger onClick={() => removeRecipe(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

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
