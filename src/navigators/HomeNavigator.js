import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../containers/HomeContainer';

const HomeNavigator = createStackNavigator(
    {
        Home: HomeContainer
    }
);

export default HomeNavigator;