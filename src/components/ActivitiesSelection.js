import React from 'react';
import { ImageBackground, View, Content, Text, Container, ScrollView, TouchableWithoutFeedback } from 'react-native';
import HomeSwiper from './HomeSwiper';
import ActivityCardContainer from '../containers/ActivityCardContainer';

class HomeFlightSelection extends React.Component {

    render() {

        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            padding: 8,
            marginTop: 10,
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

        const scrollStyle = {
            marginTop: 5
        }

        const activityType = this.props.activityType;

        return (
            <View style={containerStyle}>
                <View style={rowContainer}>
                    <Text style={normalTextStyle}>{activityType.title}</Text>
                </View>
                <ScrollView horizontal={true} style={scrollStyle} showsHorizontalScrollIndicator={false}>
                    {activityType.activities.map(activity => (<ActivityCardContainer activity={activity} key={activity.id} />))}
                </ScrollView>
            </View >
        );
    }
}

export default HomeFlightSelection;