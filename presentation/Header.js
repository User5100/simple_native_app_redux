import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export class Header extends Component {
  render () {
  	return (
      <View style={[styles.container, this.props.style]} >
      	{this.props.children}
      </View>
  	)
  }
}

const styles = StyleSheet.create({
	container: {
    height: 10,
    flex: 1,
    padding: 30
	}
});
