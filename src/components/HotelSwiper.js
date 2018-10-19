import React from 'react';
import { Image, View, Content, Text, Container } from 'react-native';
import Swiper from 'react-native-swiper';

class HomeSwiper extends React.Component {

    render() {

        const swiperStyle = {
            height: 200
        }

        const imageStyle = {
            width: '100%',
            flex: 1
        }
        return (
            <View style={swiperStyle}>
                <Swiper dotColor='#BDBBBC' activeDotColor='#656567' loop={false}>
                    {this.props.images.map((image, index) => (<Image style={imageStyle} resizeMode={'cover'} source={image} key={index}/>))}
                </Swiper>
            </View>
        );
    }
}

export default HomeSwiper;