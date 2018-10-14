import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LetItFly from './LetItFly';
import More from './More';

export default createStackNavigator(
    {
        More: More,
        LetItFly: LetItFly
    },
    {
        initialRouteName: 'More',
        headerMode: 'none'
    }
);