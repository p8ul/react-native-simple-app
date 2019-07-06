import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from '../Screens/Login/Login';
import Branch from '../Screens/Login/Branch';
import Login1 from '../Screens/Login';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Branch: Branch,
  Login1: Login1,
});

export default createAppContainer(TabNavigator);