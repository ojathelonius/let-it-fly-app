import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LetItFlyNavigator from './LetItFlyNavigator';
import More from '../components/More';
import CustomHeader from '../components/CustomHeader';

const MoreNavigator = createStackNavigator(
    {
        More: More,
        LetItFly: {
            screen: LetItFlyNavigator
        }
    },
    {
        initialRouteName: 'More',
        navigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <CustomHeader {...props} title='More' /> : null)
            })
        },
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