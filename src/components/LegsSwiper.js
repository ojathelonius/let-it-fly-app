import React from 'react';
import { ImageBackground, View, Content, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import FlightCard from './FlightCard';

class LegsSwiper extends React.Component {

    render() {

        const flight = this.props.flight;

        const swiperStyle = {
            height: 232
        }

        const buttonStyle = {
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            borderTopWidth: 1,
            borderTopColor: '#BDBDBD',
        }

        const textStyle = {
            fontSize: 15,
            padding: 10,
            color: '#5E5E5E'
        }

        const hasLayover = flight.legs.length > 1;
        return (
            <View>
                <Swiper showsPagination={false} loop={false} style={swiperStyle}>
                    {flight.legs.map((leg) => (<FlightCard flight={leg} key={leg.id} hasLayover={hasLayover}/>))}
                </Swiper>

                <TouchableWithoutFeedback onPress={() => alert('Flight booked successfully.')}>
                    <View style={buttonStyle}>
                        <Text style={textStyle}>Select this flight</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default LegsSwiper;