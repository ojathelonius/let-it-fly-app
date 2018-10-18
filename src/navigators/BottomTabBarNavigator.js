import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image, Text, View } from 'react-native';

import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import FlightsNavigator from './FlightsNavigator';
import TripsNavigator from './TripsNavigator';
import MoreNavigator from './MoreNavigator';

export default createBottomTabNavigator(
    {
        Home: HomeNavigator,
        Search: SearchNavigator,
        Flights: FlightsNavigator,
        Trips: TripsNavigator,
        More: MoreNavigator
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
                    case 'Home':
                        imgSource = focused ? require('../../assets/icons/ic_nav_home_checked.png') : require('../../assets/icons/ic_nav_home.png');
                        break;
                    case 'Search':
                        imgSource = focused ? require('../../assets/icons/ic_nav_search_checked.png') : require('../../assets/icons/ic_nav_search.png');
                        break;
                    case 'Flights':
                        imgSource = focused ? require('../../assets/icons/ic_nav_status_checked.png') : require('../../assets/icons/ic_nav_status.png');
                        break;
                    case 'Trips':
                        imgSource = focused ? require('../../assets/icons/ic_nav_trips_checked.png') : require('../../assets/icons/ic_nav_trips.png');
                        break;
                    case 'More':
                        imgSource = focused ? require('../../assets/icons/ic_nav_more_checked.png') : require('../../assets/icons/ic_nav_more.png');
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
            },
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