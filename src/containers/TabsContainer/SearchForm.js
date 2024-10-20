import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledButton, StyledForm } from './styles';

const SearchForm = ({ onSearch, searchText, setSearchText }) => {
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
            <StyledButton type="submit">
                Search
            </StyledButton>
        </StyledForm>
    );
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
