import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Modal, Input } from "antd";
import { useRequest } from "ahooks";
import { addRecipe } from "../../api/recipes";

const AddRecipeModal = ({ isOpen, closeHandler, fetchRecipes }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { run: postRecipe } = useRequest(addRecipe, {
    manual: true,
    onSuccess: () => {
      fetchRecipes();
      closeHandler();
    },
  });

  const saveChanges = useCallback(() => {
    postRecipe({ name, description });
    closeHandler();
  }, [name, description, closeHandler, postRecipe]);

  return (
    <Modal
      open={isOpen}
      onCancel={closeHandler}
      onOk={saveChanges}
      title="Add New Recipe"
    >
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};

AddRecipeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
};

export default AddRecipeModal;
