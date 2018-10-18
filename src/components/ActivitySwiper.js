import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import { Icon } from 'native-base';
import Swiper from 'react-native-swiper';

class ActivitySwiper extends React.Component {

    render() {

        const swiperStyle = {
            height: 250
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

        const rightContainer = {
            justifyContent: 'flex-end'
        }

        const lineContainer = {
            flexDirection: 'row',
            alignItems: 'center'
        }

        const iconStyle = {
            color: 'white',
            marginRight: 10,
            fontSize: 15
        }
        return (
            <View style={swiperStyle}>
                <Swiper dotColor='#BDBBBC' activeDotColor='#656567' loop={false}>
                    <ImageBackground
                        source={require("../../assets/images/chantilly.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Icon type="FontAwesome" name="home" /><Text style={mainLeftText}>Domaine de Chantilly</Text>
                                    <Text style={secondaryLeftText}>Outdoors</Text>
                                </View>
                                <View style={rightContainer}>
                                    <View style={lineContainer}>
                                        <Icon type="FontAwesome" name="location-arrow" style={iconStyle} /><Text style={secondaryRightText}>Chantilly</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/jasonmraz.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Icon type="FontAwesome" name="home" /><Text style={mainLeftText}>Jason Mraz</Text>
                                    <Text style={secondaryLeftText}>Concert</Text>
                                </View>
                                <View style={rightContainer}>
                                    <View style={lineContainer}>
                                        <Icon type="FontAwesome" name="location-arrow" style={iconStyle} /><Text style={secondaryRightText}>La Cigale</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/art_festival.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Icon type="FontAwesome" name="home" /><Text style={mainLeftText}>26th Paris Art Festival</Text>
                                    <Text style={secondaryLeftText}>Event</Text>
                                </View>
                                <View style={rightContainer}>
                                    <View style={lineContainer}>
                                        <Icon type="FontAwesome" name="location-arrow" style={iconStyle} /><Text style={secondaryRightText}>Montmartre</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Swiper>
            </View>
        );
    }
}

export default ActivitySwiper;