import React from 'react';
import { ImageBackground, View, Content, Text } from 'react-native';
import { Title } from 'native-base';
import LetItFlySwiper from './LetItFlySwiper';

class LetItFly extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const titleStyle = {
            fontFamily: 'NoTime',
            color: '#1F4A87',
            marginTop: 22,
            marginBottom: 16,
            fontSize: 35
        }
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <Title style={titleStyle}>LET IT FLY</Title>
                    <LetItFlySwiper />
                </ImageBackground>
            </View >
        );
    }
}

export default LetItFly;