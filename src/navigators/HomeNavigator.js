import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeContainer from '../containers/HomeContainer';
import CustomHeader from '../components/CustomHeader';

const HomeNavigator = createStackNavigator(
    {
        Home: HomeContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (props) => (<CustomHeader {...props}/>)
          }),
    }
);

export default HomeNavigator;