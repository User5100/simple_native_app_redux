import React, { Component } from 'react';
import { View, TextInput, 
	       Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';
import { addVision } from '../actions';

class _AddVision extends Component {

	constructor() {
		super();

		this.state = {
			newVision: '',
			error: false
		};

		this.handleOnChangeText = this.handleOnChangeText.bind(this);
		this.handleOnPress = this.handleOnPress.bind(this);
	}

	handleOnChangeText(text) {
		this.setState({ newVision: text });
	}

	handleOnPress() {
		if(this.state.newVision.length > 0) {
			this.props.addVision(this.state.newVision);
			this.setState({ newVision: '' , error: false });	
		} else { //Display error - inform user must type something before pressing enter
			this.setState({ error: true })
		} 
	}

	render() {

		let errorMessage;

  	if(this.state.error) {
  		errorMessage = <Text style={styles.error} >Please enter your vision</Text>
		}

		return (
			<View
			  style={styles.container} >
				<TextInput
				  multiline={true}
				  style={styles.input}
				  value={this.state.newVision}
				  placeholder='Add Vision'
				  onChangeText={this.handleOnChangeText}
				/>

				<View>
			  	{errorMessage}
			 	</View>

				<Button
				  onPress={this.handleOnPress}
				  style={styles.btn} >
				  <Text 
            style={styles.btnText} >
            Add Vision
          </Text>
        </Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		flex: 1
	},
	input: {
		color: 'black',
		fontSize: 20,
		top: 100,
		justifyContent: 'center',
		width: 295,
		height: 40,
		width: 295,
		height: 40,
		borderColor: 'black',
		borderBottomWidth: 2
	},
	btnText: {
		color: 'black',
    backgroundColor: 'transparent',
    fontSize: 18
	},
	btn: {
  	top: 380,
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderColor: 'black'
  },
  error: {
  	backgroundColor: 'transparent',
  	fontSize: 20,
  	color: '#FF1300'
  }
});

const mapActionsToProps = (dispatch) => ({
	addVision(name) {
		dispatch(addVision({ name }));
	}
});

const mapStateToProps = (state) => ({

});

export const AddVision = connect(mapStateToProps, mapActionsToProps)(_AddVision);