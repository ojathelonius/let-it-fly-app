import React from 'react';
import { ImageBackground, View, Content, ScrollView } from 'react-native';
import FlightCard from './FlightCard';
const flights = require('../../data/flights.json');

class AlternativeFlights extends React.Component {

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
                    <ScrollView>
                        {flights.map(flight => (<FlightCard flight={flight} key={flight.id}/>))}
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default AlternativeFlights;