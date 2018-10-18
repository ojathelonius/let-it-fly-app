import React from 'react';
import { Header, Left, Body, Right, Icon } from 'native-base';
import { Image, View, Container } from 'react-native';

class TestHeader extends React.Component {

    render() {
        const headerStyle = {
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            elevation: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD'
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

export default TestHeader;