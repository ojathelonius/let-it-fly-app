import React from 'react';
import { ImageBackground, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';
import HotelSwiper from './HotelSwiper';

class HotelCard extends React.Component {

    render() {

        const containerStyle = {
            backgroundColor: 'white',
            elevation: 3,
            marginTop: 20,
            marginBottom: 10,
            borderTopWidth: 1,
            borderTopColor: '#BDBDBD',
        }

        const headerStyle = {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            padding: 10
        }

        const titleContainerStyle = {
            flexDirection: 'column'
        }

        const starContainerStyle = {
            flexDirection: 'row'
        }

        const starStyle = {
            height: 20,
            width: 20
        }

        const mainTextStyle = {
            fontFamily: 'Roboto',
            color: '#5E5E5E',
            fontSize: 20,
            fontWeight: 'bold'
        }

        const secondaryTextStyle = {
            fontFamily: 'Roboto',
            color: '#5E5E5E',
            fontSize: 16
        }

        const iconStyle = {
            color: '#998B6E',
            fontSize: 24,
            marginRight: 15
        }

        const textIconStyle = {
            color: '#998B6E',
            fontSize: 14,
            fontFamily: 'Roboto'
        }

        const infoStyle = {
            flexDirection: 'row',
            padding: 8,
            justifyContent: 'space-between'
        }

        const iconContainer = {
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 30
        }

        const mainIconContainer = {
            flexDirection: 'row',
            alignItems: 'center'
        }

        const buttonStyle = {
            flexDirection: 'row',
            backgroundColor: '#998B6E',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
        }

        const textStyle = {
            fontSize: 15,
            padding: 6,
            color: 'white'
        }

        const rowContainer = {
            flexDirection: 'row',
            alignItems: 'center'
        }

        const locationIconStyle = {
            fontSize: 15,
            color: '#5E5E5E',
            marginRight: 10
        }

        const hotel = this.props.hotel;

        return (
            <View style={containerStyle}>
                <View style={headerStyle}>
                    <View style={titleContainerStyle}>
                        <Text style={mainTextStyle}>{hotel.name}</Text>
                        <View style={rowContainer}>
                            <Icon type="FontAwesome" name="location-arrow" style={locationIconStyle} />
                            <Text style={secondaryTextStyle}>{hotel.distanceFromAirport}</Text>
                        </View>
                    </View>
                    <View style={starContainerStyle}>
                        {[...Array(hotel.stars)].map((element, index) => <Image style={starStyle} resizeMode={'contain'} source={require('../../assets/icons/star_icon.png')} key={index} />)}
                    </View>
                </View>
                <View>
                    <HotelSwiper images={hotel.images} />
                </View>
                <View style={infoStyle}>
                    <View style={mainIconContainer}>
                        {hotel.pool ? (<Icon type="MaterialCommunityIcons" name="pool" style={iconStyle} />) : null}
                        {hotel.ac ? (<Icon type="MaterialCommunityIcons" name="air-conditioner" style={iconStyle} />) : null}
                        {hotel.nosmoking ? (<Icon type="MaterialIcons" name="smoke-free" style={iconStyle} />) : null}
                        {hotel.parking ? (<Icon type="MaterialCommunityIcons" name="parking" style={iconStyle} />) : null}
                    </View>
                    <TouchableWithoutFeedback onPress={() => alert('Hotel booked successfully.')}>
                        <View style={buttonStyle}>
                            <Text style={textStyle}>More info</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default HotelCard;