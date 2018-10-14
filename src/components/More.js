import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { Content, List, ListItem, Text, Icon, Left, Body, Right, Button } from 'native-base';

class More extends React.Component {

    render() {
        const backgroundStyle = {
            flex: 1,
            width: '100%'
        };

        const containerStyle = {
            flex: 1,
            elevation: 0
        };

        const imgStyle = {
            height: 30,
            width: 70
        }

        const listStyle = {
            marginTop: 10,
            backgroundColor: 'white',
            elevation: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#BCBCBC'
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

        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require("../../assets/background.jpg")}
                    style={backgroundStyle}>
                    <Content>
                        <List style={listStyle}>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_checkin.png')}
                                />

                                <Text style={textColor}>Check-in</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_letitfly.png')}
                                />
                                <Text style={textColor}>Let it fly !</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_offers.png')}
                                />
                                <Text style={textColor}>Special offers</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_krisflyer.png')}
                                />
                                <Text style={textColor}>KrisFlyer</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_krisworld.png')}
                                />
                                <Text style={textColor}>KrisWorld</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_ereader.png')}
                                />
                                <Text style={textColor}>e-Library</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_flight_schedule.png')}
                                />
                                <Text style={textColor}>Flights schedule</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_krisshop.png')}
                                />
                                <Text style={textColor}>KrisShop</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_question.png')}
                                />
                                <Text style={textColor}>Help</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_more.png')}
                                />
                                <Text style={textColor}>Terms and conditions</Text>
                            </ListItem>
                            <ListItem icon style={listItemStyle}>
                                <Image
                                    style={imgStyle}
                                    resizeMode={'contain'}
                                    source={require('../../assets/icons/ic_nav_settings.png')}
                                />
                                <Text style={textColor}>Settings</Text>
                            </ListItem>
                        </List>
                    </Content>
                </ImageBackground>
            </View>
        );
    }
}

export default More;