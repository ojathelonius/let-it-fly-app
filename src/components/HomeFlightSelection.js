import React from 'react';
import { ImageBackground, View, Content, Text, Container, ScrollView, TouchableWithoutFeedback } from 'react-native';
import HomeSwiper from './HomeSwiper';

class HomeFlightSelection extends React.Component {

    render() {

        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: 8,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 7,
            marginRight: 7
        }

        const normalTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 17,
            color: '#908B6E'
        }

        const rowContainer = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

        const boldTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: '#908B6E',
            fontWeight: 'bold'
        }

        const imgSlideStyle = {
            width: 160,
            height: 160,
            marginRight: 10
        }

        const columnContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1
        }

        const normalContainer = {
            display: 'flex',
            flexDirection: 'column',
            margin: 5
        }

        const mainText = {
            fontFamily: 'Roboto',
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold'
        }

        const secondaryLeft = {
            fontFamily: 'Roboto',
            fontSize: 14,
            color: 'white'
        }

        const scrollStyle = {
            marginTop: 5
        }

        const touchableStyle = {
            flex: 1
        }
        return (
            <View style={containerStyle}>
                <View style={rowContainer}>
                    <Text style={normalTextStyle}>Best prices from Paris</Text>
                    <Text style={boldTextStyle}>SEE ALL</Text>
                </View>
                <ScrollView horizontal={true} style={scrollStyle} showsHorizontalScrollIndicator={false}>

                    <ImageBackground
                        source={require("../../assets/images/kuala_lumpur.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <TouchableWithoutFeedback style={touchableStyle} onPress={() => this.props.notifyOverbooking()}>
                            <View style={columnContainer}>
                                <View style={normalContainer}>
                                    <Text style={mainText}>Kuala Lumpur</Text>
                                    <Text style={secondaryLeft}>Economy</Text>
                                </View>
                                <View style={normalContainer}>
                                    <Text style={secondaryLeft}>From</Text>
                                    <Text style={mainText}>EUR 495*</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/jakarta.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={normalContainer}>
                                <Text style={mainText}>Jakarta</Text>
                                <Text style={secondaryLeft}>Economy</Text>
                            </View>
                            <View style={normalContainer}>
                                <Text style={secondaryLeft}>From</Text>
                                <Text style={mainText}>EUR 499*</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/singapore.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={normalContainer}>
                                <Text style={mainText}>Singapore</Text>
                                <Text style={secondaryLeft}>Economy</Text>
                            </View>
                            <View style={normalContainer}>
                                <Text style={secondaryLeft}>From</Text>
                                <Text style={mainText}>EUR 499*</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View >
        );
    }
}

export default HomeFlightSelection;