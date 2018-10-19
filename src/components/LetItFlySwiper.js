import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import Swiper from 'react-native-swiper';

class LetItFlySwiper extends React.Component {

    render() {

        const swiperStyle = {
            height: 200
        }

        const text = {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
        }

        const imgSlideStyle = {
            width: '100%',
            flex: 1
        }

        const columnContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: 40,
            marginLeft: 10,
            marginRight: 10
        }

        const rowContainer = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

        const mainText = {
            fontFamily: 'Roboto',
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold'
        }

        const secondaryText = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'white'
        }

        return (
            <View style={swiperStyle}>
                <Swiper dotColor='#BDBBBC' activeDotColor='#656567' loop={false}>
                    <ImageBackground
                        source={require("../../assets/images/letitfly.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View>
                                <Text style={mainText}>Overbooked flight?</Text>
                                <Text style={secondaryText}>We're here to help</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/siaflight.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View>
                                <Text style={mainText}>Hitch-hike a flight</Text>
                                <Text style={secondaryText}>Find alternative flights towards your initial destination</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/extendyourstay.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View>
                                <Text style={mainText}>Extend your stay</Text>
                                <Text style={secondaryText}>Find activities nearby</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/hotelroom.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View>
                                <Text style={mainText}>Find accomodation</Text>
                                <Text style={secondaryText}>We selected the best hotels in the area</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </Swiper>
            </View >
        );
    }
}

export default LetItFlySwiper;