import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import HomeHeader from './HomeHeader';
import HomeSwiper from './HomeSwiper';
import HomeFlightSelection from './HomeFlightSelection';
import OverbookWarning from './OverbookWarning';

class Home extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const hiddenEventStyle = {
            flex: 1
        }

        const touchableStyle = {
            flex: 1
        }

        return (
            <View style={containerStyle}>
                {this.props.isOverbooked ? (
                    <OverbookWarning />) : null}
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <HomeHeader />
                    <HomeSwiper />
                    <View style={touchableStyle}>
                        <HomeFlightSelection notifyOverbooking={this.props.notifyOverbooking} />
                    </View>
                </ImageBackground>
            </View >
        );
    }
}

export default Home;