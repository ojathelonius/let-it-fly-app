import React from 'react';
import { ImageBackground, View, Content } from 'react-native';

class Home extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        };

        const containerStyle = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1
        };

        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                </ImageBackground>
            </View>
        );
    }
}

export default Home;