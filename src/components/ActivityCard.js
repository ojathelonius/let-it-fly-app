import React from 'react';
import { ImageBackground, View, Content, Text, Container, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import HomeSwiper from './HomeSwiper';

class ActivityCard extends React.Component {

    render() {

        const imgSlideStyle = {
            width: 160,
            height: 160,
            marginRight: 10
        }

        const columnContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
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

        const activity = this.props.activity;

        const touchableStyle = {
            flex: 1
        }

        return (
            <TouchableWithoutFeedback style={touchableStyle} onPress={() => this.props.showActivityModal()}>
                <ImageBackground
                    source={activity.image}
                    style={imgSlideStyle}
                    resizeMode='cover'>
                    <View style={columnContainer}>
                        <View style={normalContainer}>
                            <Text style={mainText}>{activity.title}</Text>
                            <Text style={secondaryLeft}>{activity.description}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }
}

export default ActivityCard;