import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Image, View, Container } from 'react-native';

class CustomHeader extends React.Component {

    render() {
        const headerStyle = {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }

        const logoStyle = {
            height: 30,
            width: 100
        };

        const imgStyle = {
            height: 30,
            width: 70
        }

        const titleStyle = {
            fontFamily: 'Roboto',
            color: '#878787',
            fontSize: 18
        }

        return (

            <Header style={headerStyle}>
                <View>
                    <Image
                        style={logoStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/icons/ic_ab_sia_logo.png')}
                    />
                </View>
                <View><Title style={titleStyle}>{this.props.title ? this.props.title : ''}</Title></View>
                <View>
                    <Image
                        style={imgStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/icons/ic_ab_profile.png')}
                    />
                </View>
            </Header>
        );
    }
}

export default CustomHeader;