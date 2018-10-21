import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';
import ActivitiesContainer from '../containers/ActivitiesContainer';

const ActivitiesNavigator = createStackNavigator(
    {
        Activities: ActivitiesContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomLetItFlyHeader {...props} title='Activities'/>)
          }),
    }
);

export default ActivitiesNavigator;