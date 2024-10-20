import React, { useState } from 'react';
import { Tabs } from 'antd';
import { tabItems } from './tabs';
import SearchForm from './SearchForm';

const TabsContainer = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (searchText) => {
        console.log(searchText);
    };

    const onTabChange = () => {
        setSearchText('');
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} searchText={searchText} setSearchText={setSearchText} />
            <Tabs
                defaultActiveKey={1}
                tabPosition="left"
                items={tabItems}
                onChange={onTabChange}
            />
        </div>
    );
};

export default TabsContainer;
