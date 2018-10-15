import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import HomeHeader from './HomeHeader';
import HomeSwiper from './HomeSwiper';

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
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <HomeHeader />
                    <HomeSwiper />
                </ImageBackground>
            </View >
        );
    }
}

export default Home;