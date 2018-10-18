import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { Content, List, ListItem, Text, Title } from 'native-base';
import LetItFlySwiper from './LetItFlySwiper';

class LetItFly extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const titleStyle = {
            fontFamily: 'NoTime',
            color: '#685E50',
            paddingTop: 22,
            paddingBottom: 16,
            fontSize: 35,
            backgroundColor: 'white',
            elevation: 10
        }

        const listStyle = {
            marginTop: 15,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#BCBCBC'
        }

        const listItemStyle = {
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            marginLeft: 0,
            justifyContent: 'flex-start',
            height: 50
        }

        const textColor = {
            color: '#656565'
        }

        const imgStyle = {
            height: 30,
            width: 70
        }

        const descriptionStyle = {
            padding: 20,
            flex: 1,
        }

        const largeTextDescriptionStyle = {
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
            color: '#908B6E'
        }
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <Title style={titleStyle}>LET IT FLY</Title>
                    <LetItFlySwiper />
                    <Content>
                        <List style={listStyle}>
                            <ListItem icon style={listItemStyle} onPress={() => this.props.navigation.navigate('AlternativeFlights')}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_checkin.png')}
                                />

                                <Text style={textColor} >Find alternative flights</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle} onPress={() => this.props.navigation.navigate('Activities')}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_letitfly.png')}
                                />
                                <Text style={textColor}>Discover activities in the area</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle} onPress={() => this.props.navigation.navigate('Hotels')}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_offers.png')}
                                />
                                <Text style={textColor}>Locate hotels nearby</Text>
                            </ListItem>
                        </List>
                    </Content>
                    <View style={descriptionStyle}>
                        <Text style={largeTextDescriptionStyle}>It's all on us!</Text>
                    </View>
                </ImageBackground>


            </View >
        );
    }
}

export default LetItFly;