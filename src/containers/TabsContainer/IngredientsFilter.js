import React, { useMemo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

const IngredientsFilter = ({ selectedIngredients, handleIngredientChange }) => {
    const ingredientsOptions = useMemo(
        () => [
            { value: "Chicken", label: "Chicken" },
            { value: "Beef", label: "Beef" },
            { value: "Pasta", label: "Pasta" },
            { value: "Tomato", label: "Tomato" },
            { value: "Cheese", label: "Cheese" },
        ],
        []
    );

    return (
        <Select
            mode="multiple"
            allowClear
            placeholder="Select ingredients"
            value={selectedIngredients}
            onChange={handleIngredientChange}
            style={{ width: "300px" }}
            options={ingredientsOptions}
        />
    );
};

IngredientsFilter.propTypes = {
    selectedIngredients: PropTypes.array.isRequired,
    handleIngredientChange: PropTypes.func.isRequired,
};

export default IngredientsFilter;