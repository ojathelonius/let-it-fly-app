import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image, Text, View } from 'react-native';
import LetItFlyContainer from '../containers/LetItFlyContainer';
import ActivitiesNavigator from './ActivitiesNavigator';
import AlternativeFlightsNavigator from './AlternativeFlightsNavigator';
import HotelsNavigator from './HotelsNavigator';
import CustomLetItFlyHeader from '../components/CustomLetItFlyHeader';

const LetItFlyNavigator = createBottomTabNavigator(
    {
        LetItFly: LetItFlyContainer,
        AlternativeFlights: AlternativeFlightsNavigator,
        Activities: ActivitiesNavigator,
        Hotels: HotelsNavigator
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                const imgStyle = {
                    height: 30,
                    width: 70
                }

                const labelStyle = {
                    fontSize: 11,
                    textAlign: 'center',
                    color: '#9B8C74'
                }

                let imgSource;

                switch (routeName) {
                    case 'LetItFly':
                        imgSource = focused ? require('../../assets/icons/letitfly_icon_checked.png') : require('../../assets/icons/letitfly_icon.png');
                        break;
                    case 'AlternativeFlights':
                        imgSource = focused ? require('../../assets/icons/plane_checked.png') : require('../../assets/icons/plane.png');
                        break;
                    case 'Hotels':
                        imgSource = focused ? require('../../assets/icons/hotels_checked.png') : require('../../assets/icons/hotels.png');
                        break;
                    case 'Activities':
                        imgSource = focused ? require('../../assets/icons/activities_checked.png') : require('../../assets/icons/activities.png');
                        break;
                    default:
                        imgSource = focused ? require('../../assets/icons/ic_nav_more_checked.png') : require('../../assets/icons/ic_nav_more.png');
                }

                return focused ?
                    (<View>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={imgSource} />
                        <Text style={labelStyle}>{routeName}</Text>
                    </View>
                    ) : (
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={imgSource} />
                    );
            }
        }),
        tabBarOptions: {
            showLabel: false,
            style: {
                borderTopWidth: 0,
                elevation: 8,
                height: 55
            }
        },
    }
);

export default LetItFlyNavigator;