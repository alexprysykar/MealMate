import React, { useState } from "react";
import { Tabs } from "antd";
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

const TabsContainer = () => {
  const [searchText, setSearchText] = useState("");

  const { data: recipes, loading, run: fetchRecipes } = useRequest(getRecipes);

  const handleSearch = (searchText) => {
    fetchRecipes();
    console.log("fetch called", searchText);
  };

  const tabItems = [
    {
      label: "Feed",
      key: TABS.Feed,
      children: <FeedTable recipes={recipes} loading={loading} />,
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

      <Tabs
        defaultActiveKey={TABS.Feed}
        items={tabItems}
        onChange={onTabChange}
      />
    </TabsContainerWrapper>
  );
};

export default TabsContainer;
