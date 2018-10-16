import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LetItFlyContainer from '../containers/LetItFlyContainer';

const LetItFlyNavigator = createStackNavigator(
    {
        LetItFly: LetItFlyContainer
    },
    {
        initialRouteName: 'LetItFly',
        headerMode: 'none'
    }
);

export default LetItFlyNavigator;