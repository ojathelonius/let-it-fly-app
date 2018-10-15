import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import Swiper from 'react-native-swiper';

class HomeSwiper extends React.Component {

    render() {

        const swiperStyle = {
            height: 280
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
            marginBottom: 30,
            marginLeft: 10,
            marginRight: 10
        }

        const rowContainer = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

        const mainLeftText = {
            fontFamily: 'Roboto',
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold'
        }

        const secondaryLeftText = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'white'
        }

        const mainRightText = {
            fontFamily: 'Roboto',
            fontSize: 22,
            color: 'white',
            textAlign: 'right',
            fontWeight: 'bold'
        }

        const secondaryRightText = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'white',
            textAlign: 'right'
        }
        return (
            <View style={swiperStyle}>
                <Swiper dotColor='#BDBBBC' activeDotColor='#656567'>
                    <ImageBackground
                        source={require("../../assets/images/sydney.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Paris to Sydney</Text>
                                    <Text style={secondaryLeftText}>Economy</Text>
                                </View>
                                <View>
                                    <Text style={secondaryRightText}>From</Text>
                                    <Text style={mainRightText}>EUR 848*</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/tokyo.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Paris to Tokyo</Text>
                                    <Text style={secondaryLeftText}>Business</Text>
                                </View>
                                <View>
                                    <Text style={secondaryRightText}>From</Text>
                                    <Text style={mainRightText}>EUR 1649*</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/bali.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Paris to Bali</Text>
                                    <Text style={secondaryLeftText}>Economy</Text>
                                </View>
                                <View>
                                    <Text style={secondaryRightText}>From</Text>
                                    <Text style={mainRightText}>EUR 1233*</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Swiper>
            </View>
        );
    }
}

export default HomeSwiper;