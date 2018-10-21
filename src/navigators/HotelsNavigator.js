import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import HotelsContainer from '../containers/HotelsContainer';

const HotelsNavigator = createStackNavigator(
    {
        Hotels: HotelsContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Hotels'/>)
          }),
    }
);

export default HotelsNavigator;