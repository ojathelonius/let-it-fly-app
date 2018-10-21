import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';

class OverbookWarning extends React.Component {

    render() {

        const containerStyle = {
            padding: 10,
            backgroundColor: '#568CA8'
        }

        const warningStyle = {
            fontSize: 15,
            color: 'white',
            textAlign: 'center'
        }

        const tapHereStyle = {
            fontSize: 15,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 5
        }

        const iconStyle = {
            color: 'white',
            fontSize: 15,
            paddingRight: 200
        }

        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LetItFly')}>
                <View style={containerStyle}>
                    <Text style={warningStyle}>Your flight SQ336 to Singapore might be overbooked.</Text>
                    <Text style={tapHereStyle}>Tap here to see the perks of volunteering your seat !</Text>
                </View >
            </TouchableWithoutFeedback>
        );
    }
}

export default OverbookWarning;