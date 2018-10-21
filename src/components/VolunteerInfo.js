import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class VolunteerInfo extends React.Component {

    render() {

        const containerStyle = {
            padding: 10,
            backgroundColor: '#568CA8'
        }

        const infoStyle = {
            fontSize: 15,
            color: 'white',
            textAlign: 'center'
        }

        const iconStyle = {
            color: 'white',
            fontSize: 15,
            paddingRight: 200
        }

        return (
            <View style={containerStyle}>
                <Text style={infoStyle}>Thank you for volunteering to take the next flight. You can now make bookings !</Text>
            </View >
        );
    }
}

export default VolunteerInfo;