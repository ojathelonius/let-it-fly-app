import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import AlternativeFlightsContainer from '../containers/AlternativeFlightsContainer';

const AlternativeFlightsNavigator = createStackNavigator(
    {
        AlternativeFlights: AlternativeFlightsContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Alternative flights'/>)
          }),
    }
);

export default AlternativeFlightsNavigator;