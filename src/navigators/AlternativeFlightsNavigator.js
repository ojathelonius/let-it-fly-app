import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import AlternativeFlights from '../components/AlternativeFlights';

const AlternativeFlightsNavigator = createStackNavigator(
    {
        AlternativeFlights: AlternativeFlights
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Alternative flights'/>)
          }),
    }
);

export default AlternativeFlightsNavigator;