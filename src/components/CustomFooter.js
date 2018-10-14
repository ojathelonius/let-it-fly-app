import React from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Image } from 'react-native';

class CustomFooter extends React.Component {

    render() {

        const imgStyle = {
            height: 30,
            width: 70
        }

        const footerStyle = {
            backgroundColor: 'white',
            elevation: 1
        }

        const footerTabStyle = {
            backgroundColor: 'white'
        }

        const buttonStyle = {
            backgroundColor: 'white'
        }


        return (
            <Footer style={footerStyle}>
                <FooterTab style={footerTabStyle}>
                    <Button style={buttonStyle}>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={require('../../assets/icons/ic_nav_home.png')}
                        />
                    </Button>
                    <Button style={buttonStyle}>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={require('../../assets/icons/ic_nav_search.png')}
                        />
                    </Button>
                    <Button style={buttonStyle}>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={require('../../assets/icons/ic_nav_status.png')}
                        />
                    </Button>
                    <Button style={buttonStyle}>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={require('../../assets/icons/ic_nav_trips.png')}
                        />
                    </Button>
                    <Button style={buttonStyle}>
                        <Image
                            style={imgStyle}
                            resizeMode={'contain'}
                            source={require('../../assets/icons/ic_nav_more.png')}
                        />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default CustomFooter;