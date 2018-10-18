import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomHeader from '../components/CustomHeader';
import Trips from '../components/Trips';

const TripsNavigator = createStackNavigator(
    {
        Trips: Trips
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomHeader {...props} title='Trips'/>)
          }),
    }
);

export default TripsNavigator;