import React, { Component } from 'react';
import {
  Text, View,
  ScrollView, Dimensions,
  SafeAreaView, Image
} from 'react-native';
import {
  Body, Right, Button, Input,
  Left, Container, Item,
  Header, Icon, Title
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Utilities
 */
import { colors } from '../utils/constants';
import {IProps} from '../types';

const WIDTH = Dimensions.get('window').width;


export class Balance extends Component<IProps> {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Header style={{
          backgroundColor: colors.primaryBgDark,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5
        }} androidStatusBarColor={colors.primaryBgDark}>
          <Left>
            <Icon style={{ color: colors.white }} name="list" onPress={() => this.props.navigation.toggleDrawer()}/>
          </Left>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ color: colors.white }}>Home</Title>
          </Body>
          <Right>
            <Icon style={{ color: colors.white }} name="cart"/>
          </Right>
        </Header>
        <ScrollView style={{
          backgroundColor: colors.primaryBgDark, flex: 1
        }}>
          <View style={{
            marginHorizontal: 20
          }}>
            <Item>
              <Icon active name="search" style={{
                color: colors.lightGrey
              }}/>
              <Input underlineColorAndroid='transparent' placeholder="Search" style={{
                color: colors.white
              }}/>
            </Item>
           
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
              </View>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  color: colors.lightGrey
                }}>See more</Text>
              </View>
            </View>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 12
          }}>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Balance;
