import React, { useState } from "react";
import { Button, Tabs } from "antd";
import SearchForm from "./SearchForm";
import { getRecipes } from "../../api/recipes";
import { useRequest } from "ahooks";
import FeedTable from "../FeedTable";
import SavedTable from "../SavedTable";
import { TABS } from "./constants";
import {
  StyledHeader,
  StyledSearchSection,
  TabsContainerWrapper,
} from "./styles";
import AddRecipeModal from "../AddRecipeModal";

const TabsContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { data: recipes, loading, run: fetchRecipes } = useRequest(getRecipes);

  const handleSearch = (searchText) => {
    fetchRecipes();
    console.log("fetch called", searchText);
  };

  const tabItems = [
    {
      label: "Feed",
      key: TABS.Feed,
      children: (
        <FeedTable
          recipes={recipes}
          loading={loading}
          fetchRecipes={fetchRecipes}
        />
      ),
    },
    {
      label: "Saved",
      key: TABS.Saved,
      children: <SavedTable recipes={recipes} loading={loading} />,
    },
  ];

  const onTabChange = () => {
    setSearchText("");
  };

  return (
    <>
      <TabsContainerWrapper>
        <StyledHeader>
          <h1>Meal Mate</h1>
        </StyledHeader>

        <StyledSearchSection>
          <SearchForm
            onSearch={handleSearch}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </StyledSearchSection>
        <Button type="primary" onClick={() => setIsAddModalOpen(true)}>
          Add Recipe
        </Button>

        <Tabs
          defaultActiveKey={TABS.Feed}
          items={tabItems}
          onChange={onTabChange}
        />
      </TabsContainerWrapper>
      <AddRecipeModal
        isOpen={isAddModalOpen}
        closeHandler={() => setIsAddModalOpen(false)}
        fetchRecipes={fetchRecipes}
      />
    </>
  );
};

export default TabsContainer;
