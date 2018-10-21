import React from 'react';
import { ImageBackground, View, Content, ScrollView } from 'react-native';
import LegsSwiper from './LegsSwiper';
import flights from '../../data/flights';

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

        const scrollStyle = {
            flex: 1
        }
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <ScrollView style={scrollStyle}>
                        {flights.map(flight => (<LegsSwiper flight={flight} key={flight.id} canBook={this.props.canBook}/>))}
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default AlternativeFlights;