import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "antd";
import { deleteRecipe } from "../../api/recipes";
import { useRequest } from "ahooks";

const FeedTable = ({ recipes, loading, fetchRecipes }) => {
  const { run: removeRecipe } = useRequest(deleteRecipe, {
    manual: true,
    onSuccess: () => {
      fetchRecipes();
    },
  });

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
    {
      title: "Action",
      key: "Action",
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
  fetchRecipes: PropTypes.func.isRequired,
};

export default FeedTable;
