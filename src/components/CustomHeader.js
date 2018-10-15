import React from 'react';
import { Header, Left, Body, Right, Icon, Title } from 'native-base';
import { Image, View, Container } from 'react-native';

class CustomHeader extends React.Component {

    render() {
        const headerStyle = {
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            elevation: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD'
        }

        const titleStyle = {
            color: 'black'
        }

        const logoStyle = {
            height: 30,
            width: 100
        };

        const imgStyle = {
            height: 30,
            width: 70
        }

        return (
            <Header style={headerStyle}>
                <Left>
                    <Image
                        style={logoStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/icons/ic_ab_sia_logo.png')}
                    />
                </Left>
                <Right>
                    <Image
                        style={imgStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/icons/ic_ab_profile.png')}
                    />
                </Right>
            </Header>
        );
    }
}

export default CustomHeader;