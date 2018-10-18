import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomHeader from '../components/CustomHeader';
import Flights from '../components/Flights';

const FlightsNavigator = createStackNavigator(
    {
        Flights: Flights
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomHeader {...props} title='Find flights'/>)
          }),
    }
);

export default FlightsNavigator;