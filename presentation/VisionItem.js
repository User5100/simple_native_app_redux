import React from 'react';
import { View, Text,
         StyleSheet } from 'react-native';

export const VisionItem = (props) => (
	<View>
		<Text style={styles.text} >{props.visionItem.name}</Text>
	</View>
)

const styles = StyleSheet.create({
	text: {
		backgroundColor: 'transparent',
		color: 'black',
		fontSize: 20
	}
})