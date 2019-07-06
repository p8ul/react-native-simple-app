import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {LinearGradient} from 'expo-linear-gradient';
import { colors } from '../../../utils/constants';

const styles = StyleSheet.create({
  actionButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 14
  }
});
export class FullButton extends Component<{title: string}> {
  static propTypes = {
    settings: PropTypes.object,
    title: PropTypes.string
  }

  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[
          colors.purpleDark,
          colors.purple,
          colors.purpleLight
        ]} style={{
          borderRadius: 6,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Text style={styles.actionButtonText}>
          {this.props.title}
        </Text>
      </LinearGradient>
    );
  }
}

export default FullButton;
