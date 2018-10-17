import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import { Icon } from 'native-base';
import HomeHeader from './HomeHeader';
import HomeSwiper from './HomeSwiper';
import HomeFlightSelection from './HomeFlightSelection';

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

        const warningStyle = {
            backgroundColor: 'orange',
            fontSize: 15,
            padding: 8,
            color: 'white',
            textAlign: 'center'
        }

        const touchableStyle = {
            flex: 1
        }

        const iconStyle = {
            color: 'white',
            fontSize: 15
        }

        return (
            <View style={containerStyle}>
                {this.props.isOverbooked ? (
                    <Text style={warningStyle}><Icon type="FontAwesome" name="exclamation-triangle" style={iconStyle} />Your flight might be overbooked. See what your options are with Let it fly !</Text>) : null}
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