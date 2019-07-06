import React, { Component } from 'react';
import { Image, Text, SectionList, SafeAreaView } from 'react-native';
import {
    Content,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from 'native-base';
import styles from './style';
import { IProps } from '../../types';

const drawerCover = require('../../../assets/logoc.png');
const drawerImage = require('../../../assets/chat.png');

const datas = [
    {
        name: 'LoginMain',
        route: 'LoginMain',
        icon: 'person',
        bg: 'red'
    },
    {
        name: 'Shapes',
        route: 'Shapes',
        icon: 'ios-bonfire',
        bg: '#000'
    },
    {
        name: 'NumberVerification',
        route: 'NumberVerification',
        icon: 'lock',
        bg: '#C5F433'
    },
    {
        name: 'Branch',
        route: 'Branch',
        icon: 'lock',
        bg: '#C5F442'
    },
    {
        name: 'Login',
        route: 'Login',
        icon: 'lock',
        bg: '#C5F442'
    },
    {
        name: 'Login-Snow',
        route: 'LoginScreen',
        icon: 'lock',
        bg: '#C5F442'
    },
    {
        name: 'Shopping',
        route: 'Shopping',
        icon: 'cart',
        bg: '#C5F442'
    },
    {
        name: 'Balance',
        route: 'Balance',
        icon: 'easel',
        bg: '#C5F442'
    },
    {
        name: 'ListCategory',
        route: 'ListCategory',
        icon: 'phone-portrait',
        bg: '#477EEA',
        types: '10'
    },
    {
        name: 'Single Product',
        route: 'SingleProduct',
        icon: 'phone-portrait',
        bg: '#DA4437',
        types: '4'
    },
    {
        name: 'Best Seller',
        route: 'BestSeller',
        icon: 'notifications',
        bg: '#4DCAE0'
    },
    {
        name: 'Flash Sale',
        route: 'FlashSale',
        icon: 'radio-button-off',
        bg: '#1EBC7C',
        types: '9'
    },
    {
        name: 'Settings',
        route: 'Settings',
        icon: 'settings',
        bg: '#B89EF5',
        types: '8'
    },
    {
        name: 'Shopping Cart',
        route: 'ShoppingCart',
        icon: 'basket',
        bg: '#EB6B23'
    },
    {
        name: 'GridCategory',
        route: 'GridCategory',
        icon: 'swap',
        bg: '#3591FA',
        types: '2'
    },
    {
        name: 'ModalTester',
        route: 'ModalTester',
        icon: 'help-buoy',
        bg: '#EF6092',
        types: '2'
    },
    {
        name: 'AppIntro',
        route: 'AppIntro',
        icon: 'call',
        bg: '#EFB406',
        types: '12'
    },
    {
        name: 'Icon',
        route: 'NHIcon',
        icon: 'information-circle',
        bg: '#bfe9ea',
        types: '4'
    },
    {
        name: 'Layout',
        route: 'NHLayout',
        icon: 'grid',
        bg: '#9F897C',
        types: '5'
    },
    {
        name: 'List',
        route: 'NHList',
        icon: 'lock',
        bg: '#5DCEE2',
        types: '8'
    },
    {
        name: 'ListSwipe',
        route: 'ListSwipe',
        icon: 'swap',
        bg: '#C5F442',
        types: '3'
    },
    {
        name: 'Picker',
        route: 'NHPicker',
        icon: 'arrow-dropdown',
        bg: '#F50C75'
    },
    {
        name: 'Radio',
        route: 'NHRadio',
        icon: 'radio-button-on',
        bg: '#6FEA90'
    },
    {
        name: 'SearchBar',
        route: 'NHSearchbar',
        icon: 'search',
        bg: '#29783B'
    },
    {
        name: 'Segment',
        route: 'Segment',
        icon: 'menu',
        bg: '#0A2C6B',
        types: '2'
    },
    {
        name: 'Spinner',
        route: 'NHSpinner',
        icon: 'navigate',
        bg: '#BE6F50'
    },
    {
        name: 'Tabs',
        route: 'NHTab',
        icon: 'home',
        bg: '#AB6AED',
        types: '3'
    },
    {
        name: 'Thumbnail',
        route: 'NHThumbnail',
        icon: 'image',
        bg: '#cc0000',
        types: '2'
    },
    {
        name: 'Toast',
        route: 'NHToast',
        icon: 'albums',
        bg: '#C5F442',
        types: '6'
    },
    {
        name: 'Typography',
        route: 'NHTypography',
        icon: 'paper',
        bg: '#48525D'
    }
];
interface ISidebar {
    icon?: string, route?: string, name?: string,
    types?: any, bg?: string
}

class SideBar extends Component<IProps> {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Content
                        style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
                    >
                        <Image source={drawerCover} style={styles.drawerCover}/>
                        {/* <Image source={drawerImage} style={styles.drawerImage}/> */}
                        <SectionList
                            renderItem={({ item, index, section }) => (
                                <ListItem
                                    button
                                    noBorder
                                    onPress={() => navigation.navigate(item.route)}
                                >
                                    <Left>
                                        <Icon
                                            active
                                            name={item.icon}
                                            style={{ color: '#777', fontSize: 26, width: 30 }}
                                        />
                                        <Text style={styles.text}>
                                            {item.name}
                                        </Text>
                                    </Left>
                                    {item.types
                                        && <Right style={{ flex: 1 }}>
                                            <Badge
                                                style={{
                                                    borderRadius: 3,
                                                    height: 25,
                                                    width: 72,
                                                    backgroundColor: item.bg
                                                }}
                                            >
                                                <Text
                                                    style={styles.badgeText}
                                                >{`${item.types} Types`}</Text>
                                            </Badge>
                                        </Right>}
                                </ListItem>
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={{ fontWeight: 'bold', paddingLeft: 12, paddingTop: 10 }}>{title}</Text>
                            )}
                            sections={[
                                {
                                    title: '', data: [{
                                        name: 'Login Screens',
                                        route: 'Login',
                                        icon: 'person',
                                        bg: 'red'
                                    },
                                    {
                                        name: 'Shopping Screens',
                                        route: 'Shopping',
                                        icon: 'cart',
                                        bg: 'red'
                                    },]
                                },
                            ]}
                            keyExtractor={(item, index) => item + index}
                        />

                    </Content>
                </Container>
            </SafeAreaView>
        );
    }
}

export default SideBar;
