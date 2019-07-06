import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';

import store from './src/redux/store';
import Navigation from './src/Navigation';

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  render() {
      return (
          <Provider store={store}>
              <Navigation />
          </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
