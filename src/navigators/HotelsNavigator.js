import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import Hotels from '../components/Hotels';

const HotelsNavigator = createStackNavigator(
    {
        Hotels: Hotels
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Hotels'/>)
          }),
    }
);

export default HotelsNavigator;