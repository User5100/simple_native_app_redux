import React, { Component } from 'react';
import { View, Text, 
	       StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';

export class Landing extends Component {
	render () {
		return (
			<LinearGradient
			  style={styles.container}
			  colors={['#34AADC', '#5AC8FB']} >
				<Text style={styles.header}>Welcome to GoAlign!</Text>
				<View style={styles.subHeader}>
				  <Text style={styles.subHeaderText} >
				    The app that helps to align your vision with your goals.
				  </Text>
				</View>  
				<Button 
				  onPress={this.props.handleShowLanding}
				  style={styles.btn}
				  children={'Enter'} >
				</Button>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40
	},
	header: {
		top: 180,
		fontSize: 30,
		flex: 1,
		backgroundColor: 'transparent'
	},
	subHeader: {	
		flex: 1,
		backgroundColor: 'transparent'
	},
	subHeaderText: {
		fontSize: 18
	}
})