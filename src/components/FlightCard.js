import React from 'react';
import { ImageBackground, View, Content, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';

class FlightCard extends React.Component {

    render() {

        const infoStyle = {
            backgroundColor: 'white',
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: '#BDBDBD',
        }

        const rowSpacedStyle = {
            justifyContent: 'space-between',
            flexDirection: 'row',
        }

        const colStyle = {
            flexDirection: 'column'
        }

        const smallTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: '#5E5E5E'
        }

        const smallBoldTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: '#5E5E5E',
            fontWeight: 'bold'
        }

        const smallGoldenTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 18,
            color: '#998B6E',
        }

        const largeGoldenTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 23,
            color: '#998B6E',
        }

        const largeTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 23,
            color: '#5E5E5E'
        }

        const cardStyle = {
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            marginBottom: 20
        }

        const lineStyle = {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }

        const centeredLineStyle = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }

        const imgStyle = {
            width: 200
        }

        const flight = this.props.flight;

        return (
            <View style={cardStyle}>
                <View style={infoStyle}>
                    <View style={rowSpacedStyle}>
                        <Text style={smallTextStyle}>{flight.flightNumber}</Text>
                        <Text style={smallTextStyle}>{flight.plane}</Text>
                    </View>
                </View>
                <View style={infoStyle}>
                    <View style={rowSpacedStyle}>
                        <View style={colStyle}>
                            <Text style={largeTextStyle}>{flight.originCity}</Text>
                            <Text style={smallTextStyle}>{flight.originAirport}</Text>
                            <Text style={smallTextStyle}>{flight.originTerminal}</Text>
                        </View>
                        <View style={colStyle}>
                            <Text style={largeTextStyle}>{flight.destinationCity}</Text>
                            <Text style={smallTextStyle}>{flight.destinationAirport}</Text>
                        </View>
                    </View>
                </View>
                <View style={infoStyle}>
                    <View style={lineStyle}>
                        <Text style={smallBoldTextStyle}>{flight.departure}</Text>
                        <Text style={smallBoldTextStyle}>{flight.arrival}</Text>
                    </View>
                    <View style={centeredLineStyle}>
                        <Text style={smallGoldenTextStyle}>Scheduled</Text>
                    </View>
                    <View style={lineStyle}>
                        <Text style={largeGoldenTextStyle}>{flight.departureTime}</Text>
                        <View>
                            <Image
                                style={imgStyle}
                                resizeMode={'contain'}
                                source={require('../../assets/icons/plane_en_route.png')}
                            />
                        </View>
                        <Text style={largeGoldenTextStyle}>{flight.arrivalTime}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => alert('Flight booked successfully.')}>
                        <View style={centeredLineStyle}>
                            <Text style={smallGoldenTextStyle}>Book it</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default FlightCard;