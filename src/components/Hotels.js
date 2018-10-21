import React from 'react';
import { ImageBackground, View, Content, ScrollView } from 'react-native';
import HotelCard from './HotelCard';
import hotels from '../../data/hotels';

class Hotels extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const scrollStyle = {
            flex: 1,
            paddingBottom: 20
        }

        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <ScrollView style={scrollStyle}>
                        {hotels.map(hotel => (<HotelCard hotel={hotel} key={hotel.id} canBook={this.props.canBook}/>))}
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default Hotels;