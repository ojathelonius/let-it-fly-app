import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import Activities from '../components/Activities';

const ActivitiesNavigator = createStackNavigator(
    {
        Activities: Activities
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Activities'/>)
          }),
    }
);

export default ActivitiesNavigator;