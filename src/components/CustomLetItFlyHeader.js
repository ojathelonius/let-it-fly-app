import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Image, View, Container } from 'react-native';

class CustomLetItFlyHeader extends React.Component {

    render() {
        const headerStyle = {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15
        }

        const logoStyle = {
            height: 30,
            width: 100
        };

        const imgStyle = {
            height: 30,
            width: 70
        }

        const letItFlyStyle = {
            fontFamily: 'NoTime',
            color: '#685E50',
            paddingTop: 22,
            paddingBottom: 16,
            fontSize: 20,
            backgroundColor: 'white'
        }

        const titleStyle = {
            fontFamily: 'Roboto',
            color: '#878787',
            fontSize: 18
        }



        return (

            <Header style={headerStyle}>
                <View>
                <Title style={letItFlyStyle}>LET IT FLY</Title>
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

export default CustomLetItFlyHeader;