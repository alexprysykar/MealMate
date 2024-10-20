import React from 'react';
import FeedTable from "../FeedTable";
import SavedTable from "../SavedTable";

export const tabItems = [
    {
        label: 'Feed',
        key: 1,
        children: <FeedTable />,
    },
    {
        label: 'Saved',
        key: 2,
        children: <SavedTable />,
    },
];
