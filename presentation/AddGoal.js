import React, { Component } from 'react';
import { View, TextInput, 
	       StyleSheet, TouchableHighlight,
	       Text } from 'react-native';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import { addGoal } from '../actions';

class _AddGoal extends Component {
	constructor () {
		super()
		this.state = {
			newGoal: '',
			error: false
		}
		this.handleOnChangeText = this.handleOnChangeText.bind(this);
		this.handleOnPress = this.handleOnPress.bind(this);
	}
	handleOnChangeText (text) {
		this.setState({ newGoal: text });
	}
	handleOnPress(event) {	
		if(this.state.newGoal.length > 0) {
			this.props.addGoal(this.state.newGoal);
			this.setState({ newGoal: '' , error: false });	
		} else { //Display error - inform user must type something before pressing enter
			this.setState({ error: true })
		} 
	}
	render () {

		let errorMessage;

  	if(this.state.error) {
  		errorMessage = <Text style={styles.error} >Please enter your vision</Text>
		}

		return (
      <View style={styles.container} >

			    <TextInput
			      multiline={true}
			      style={styles.textInput}
			      onChangeText={this.handleOnChangeText}
			      placeholder='Enter New Goal'
			      value={this.state.newGoal}>
			  	</TextInput>

			  	<View>
			  	  {errorMessage}
			 	 	</View>

	  			<Button
			      style={styles.btn}
            onPress={this.handleOnPress} >
            <Text 
              style={styles.btnText} >
              Add Goal
            </Text>
          </Button>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40
	},
	textInput: {
		color: 'white',
		fontSize: 20,
		top: 100,
		justifyContent: 'center',
		width: 295,
		height: 40,
		borderColor: 'white',
		borderBottomWidth: 2
	},
	btnText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18
  },
  btn: {
  	top: 380,
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderColor: 'white'
  },
  error: {
  	backgroundColor: 'transparent',
  	fontSize: 20,
  	color: '#FF1300'
  }
});

const mapActionsToProps = (dispatch) => ({
	addGoal(name) {
		dispatch(addGoal({ name }));
	}
});

const mapStateToProps = (state) => ({
	
});

export const AddGoal = connect(mapStateToProps, mapActionsToProps)(_AddGoal); 