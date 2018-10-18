import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Search from '../components/Search';

const SearchNavigator = createStackNavigator(
    {
        Search: Search
    }
);

export default SearchNavigator;