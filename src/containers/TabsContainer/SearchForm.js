import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledButton, StyledForm } from "./styles";
import IngredientsFilter from "./IngredientsFilter";

const SearchForm = ({ onSearch, searchText, setSearchText }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(searchText);
    },
    [onSearch, searchText]
  );

  return (
    <StyledForm onSubmit={handleSearch}>
      <StyledInput
        type="text"
        placeholder="Search recipes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <IngredientsFilter
        selectedIngredients={selectedIngredients}
        handleIngredientChange={setSelectedIngredients}
      />

      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
