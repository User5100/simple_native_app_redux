import React, { Component } from 'react';
import { TouchableOpacity, Text,
         StyleSheet } from 'react-native';

export const Goal = (props) => (
	<TouchableOpacity>
		  <Text style={styles.text} >
		    { props.goal.name }
		  </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
	text: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 20
	}
})