import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Trips from '../components/Trips';

const TripsNavigator = createStackNavigator(
    {
        Trips: Trips
    }
);

export default TripsNavigator;