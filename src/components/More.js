import React from 'react';
import { ImageBackground, View, Content } from 'react-native';

class More extends React.Component {

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
                </ImageBackground>
            </View>
        );
    }
}

export default More;