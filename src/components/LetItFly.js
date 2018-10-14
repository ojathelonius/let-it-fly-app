import React from 'react';
import { ImageBackground, View, Content, Text } from 'react-native';

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

        return (
            <View style={containerStyle}>
                <Text>Let it fly</Text>
            </View>
        );
    }
}

export default LetItFly;