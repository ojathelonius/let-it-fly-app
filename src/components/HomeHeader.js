import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import HomeSwiper from './HomeSwiper';

class Home extends React.Component {

    render() {

        const headerStyle = {
            display: 'flex',
            justifyContent: 'center',
            height: 55,
            backgroundColor: '#041E41',
            padding: 8,
            elevation: 10
        }

        const columnContainer = {
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        }

        const rowContainer = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

        const textStyle = {
            ontFamily: 'Roboto',
            fontSize: 14,
            color: 'white'
        }

        return (
            <View style={headerStyle}>
                <View style={rowContainer}>
                    <View style={columnContainer}>
                        <Text style={textStyle}>Welcome M. Johanet</Text>
                        <Text style={textStyle}>KF 8842914978</Text>
                    </View>
                    <View>
                        <Text style={textStyle}>399 Miles KF</Text>
                        <Text style={textStyle}>KrisFlyer</Text>
                    </View>
                </View>
            </View >
        );
    }
}

export default Home;