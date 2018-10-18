import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomHeader from '../components/CustomHeader';
import Search from '../components/Search';

const SearchNavigator = createStackNavigator(
    {
        Search: Search
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomHeader {...props}/>)
          }),
    }
);

export default SearchNavigator;