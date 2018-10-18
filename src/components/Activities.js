import React from 'react';
import { ImageBackground, View, Content, ScrollView, Text } from 'react-native';
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
                </ImageBackground>
            </View>
        );
    }
}

export default Activities;