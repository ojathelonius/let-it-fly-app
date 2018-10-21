import React from 'react';
import { ImageBackground, View, Content, ScrollView, Text, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { Icon } from 'native-base';
import ActivitiesSelection from './ActivitiesSelection';
import ActivitySwiper from './ActivitySwiper';

import activityTypes from '../../data/activityTypes';

class Activities extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const recommandationTextStyle = {
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#908B6E',
            padding: 10
        }

        const iconStyle = {
            color: '#908B6E',
            fontSize: 20,
        }

        const externalModalStyle = {
            marginBottom: 140,
            marginTop: 100,
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#BDBDBD',
            borderRadius: 4,
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            elevation: 4
        }

        const closeStyle = {
            flexDirection: 'row',
            justifyContent: 'center'
        }

        const mainViewStyle = {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }

        const imgActivityStyle = {
            height: 200,
            width: '100%'
        }
        const buttonStyle = {
            flexDirection: 'row',
            backgroundColor: '#5E5E5E',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#5E5E5E',
            borderRadius: 3,
            width: 100,
            marginLeft: 10,
            marginRight: 10
        }

        const textStyle = {
            fontSize: 15,
            padding: 10,
            color: 'white'
        }

        const activityTitleStyle = {
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#5E5E5E'
        }

        const activityDescriptionStyle = {
            fontFamily: 'Roboto',
            fontSize: 15,
            color: '#5E5E5E',
        }

        const textViewStyle = {
            marginTop: 15,
            padding: 10
        }


        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <ScrollView>
                        <Text style={recommandationTextStyle}>Recommended for you</Text>
                        <ActivitySwiper />
                        {activityTypes.map(activityType => (<ActivitiesSelection activityType={activityType} key={activityType.id} />))}
                    </ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.props.showActivityModal}
                        onRequestClose={() => { }}
                        style={{ flex: 0 }}>
                        <View style={externalModalStyle}>
                            <View style={mainViewStyle}>
                                <Image
                                    style={imgActivityStyle}
                                    resizeMode={'cover'}
                                    source={require('../../assets/images/acrobranche.jpg')} />
                                <View style={textViewStyle}>
                                    <Text style={activityTitleStyle}>
                                        Treetop Adventure
                                </Text>
                                    <Text style={activityDescriptionStyle}>
                                        A day in the trees at Treetop Adventure is all about fun, challenging yourself and unleashing your inner monkey!
                                </Text>
                                    <Text style={activityDescriptionStyle}>
                                        Come out and experience a unique adventure that’s perfect for family and friends to enjoy together, and discover the beauty of our forests from the lofty heights of our TreeTops Adventure Course!
                                </Text>
                                </View>
                            </View>
                            <View style={closeStyle}>
                                <TouchableWithoutFeedback onPress={() => this.props.hideActivityModal()}>
                                    <View style={buttonStyle}>
                                        <Text style={textStyle}>Cancel</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => alert('Booking successful')}>
                                    <View style={buttonStyle}>
                                        <Text style={textStyle}>Book</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </Modal>
                </ImageBackground>
            </View >
        );
    }
}

export default Activities;