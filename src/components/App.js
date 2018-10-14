import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Asset, AppLoading, SplashScreen, Constants } from 'expo';
import { Dimensions, Platform } from "react-native";
import CustomHeader from './CustomHeader';
import Home from './Home';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import { createBottomTabNavigator  } from 'react-navigation';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class App extends React.Component {

    async componentWillMount() {
        this.props.loadResources();
    }



    render() {


        const containerStyle = {
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        }

        if (!this.props.isReady) {
            return (
                <Expo.AppLoading />
            );
        }

        return (
            <Container style={containerStyle}>
                <CustomHeader />
                <BottomTabBarNavigator />
            </Container>
        );
    }
}

export default App;