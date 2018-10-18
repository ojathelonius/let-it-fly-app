import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LetItFlyNavigator from './LetItFlyNavigator';
import More from '../components/More';

const MoreNavigator = createStackNavigator(
    {
        More: More,
        LetItFly: LetItFlyNavigator,
    },
    {
        initialRouteName: 'More'
    }
);

/* Hides the tab bar when switching to another navigator */
MoreNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default MoreNavigator;