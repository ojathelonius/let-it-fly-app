import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import HomeHeader from './HomeHeader';
import HomeSwiper from './HomeSwiper';
import HomeFlightSelection from './HomeFlightSelection';
import Egg from 'react-native-egg';

class Home extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const hiddenEventStyle = {
            height: 100
        }
        

        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <HomeHeader />
                    <HomeSwiper />
                    <HomeFlightSelection />
                    <Egg style={hiddenEventStyle}
                        setps={'TT'}
                        onCatch={() => this.props.notifyOverbooking()}
                    >
                    </Egg>
                </ImageBackground>
            </View >
        );
    }
}

export default Home;