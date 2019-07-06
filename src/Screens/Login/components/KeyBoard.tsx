import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  dot: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginTop: 4
  },
});

export class KeyBoard extends Component<{setPin: ()=>any, number: string | number}> {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    setPin: PropTypes.func.isRequired
  }

  render() {
    if (this.props.number !== 11) {
      return (
        <TouchableOpacity >
          <View style={{
            height: 50,
            width: 50,
            backgroundColor: 'red',
            borderRadius: 25,
            margin: 10,
            shadowOffset: { width: 1, height: 1 },
            shadowColor: 'white',
            shadowOpacity: 0.5,
            elevation: 5,
          }}>
            <Text onPress={() => this.props.setPin()} style={[styles.dot, { fontSize: 29 }]}>
              {this.props.number}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.props.setPin()} >
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'transparent',
          borderRadius: 25,
          margin: 10,
        }}>
          <Text style={[styles.dot, { color: 'transparent', fontSize: 29 }]}>
              ,
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default KeyBoard;
