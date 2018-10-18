import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Flights from '../components/Flights';

const FlightsNavigator = createStackNavigator(
    {
        Flights: Flights
    }
);

export default FlightsNavigator;