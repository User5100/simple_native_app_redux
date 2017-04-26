import React from 'react';
import { View, Text,
         StyleSheet } from 'react-native';

export const VisionList = (props) => (
  <View>
    {props.vision.map((v, i) => {
			return <Text 
			         key={i}
			         style={styles.text}
			         >{v.name}      
			       </Text>
	  })}
	</View>	
)

const styles = StyleSheet.create({
	text: {
		backgroundColor: 'transparent'
	}
})