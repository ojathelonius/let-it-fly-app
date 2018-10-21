import React from 'react';
import { ImageBackground, View, Content, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import FlightCard from './FlightCard';

class LegsSwiper extends React.Component {

    render() {

        const flight = this.props.flight;

        const swiperStyle = this.props.canBook ?
            {
                height: 232
            } :
            {
                height: 234,
                borderBottomWidth: 1,
                borderBottomColor: '#BDBDBD',
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
                    {flight.legs.map((leg) => (<FlightCard flight={leg} key={leg.id} hasLayover={hasLayover} />))}
                </Swiper>


                {this.props.canBook ? (
                    <TouchableWithoutFeedback onPress={() => alert('Flight booked successfully.')}>
                        <View style={buttonStyle}>
                            <Text style={textStyle}>Select this flight</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ) : null}

            </View>
        );
    }
}

export default LegsSwiper;