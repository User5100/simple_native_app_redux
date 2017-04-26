import React, { Component } from 'react';
import { View, Text, 
	       StyleSheet, TouchableOpacity,
	       ListView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { Goal, Header, 
	       SuccessModal, GoalDetail } from '../presentation';
import { createActionAddGoal, getGoals,
	       setModalVisibility } from '../actions';
import { Route } from 'react-router-native';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class _Success extends Component {
	constructor() {
		super()
	}
	componentDidMount () {
    this.props.getGoals();
	}
	render () {
		return (
			<LinearGradient
			  colors={['#FF9500', '#FF5E3A']}
			  style={styles.container} >
        <Header style={styles.header} >
        	<Text style={styles.headerText} >My Goals</Text>
        </Header>

        <ListView
          style={styles.list}
          dataSource={ds.cloneWithRows(this.props.goals)}
          renderRow={goal => <Goal goal={goal} />} >	
        </ListView>

			  <SuccessModal 
			    style={styles}
			    modalVisibility={this.props.modalVisibility}
			    setModalVisibility={this.props.setModalVisibility}
			  />
			  <Button
			    style={styles.btn}
			    onPress={() => this.props.setModalVisibility(!this.props.modalVisibility)}
			  ><Text style={styles.btnText}>Set Goal</Text></Button> 
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40
	},
	header: {
		backgroundColor: 'transparent',
		borderBottomWidth: 2,
		borderBottomColor: 'white',
		width: 300,
		top: 0,
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 20,
		color: 'white'
	},
	btn: {
		borderColor: 'white'
	},
	btnText: {
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 18
	},
	list: {
		marginTop: 50
	}
})

const mapActionsToProps = (dispatch) => ({
	getGoals () {
		dispatch(getGoals())
	},
	setModalVisibility (isVisible) {
		dispatch(setModalVisibility(isVisible))
	}
})

const mapStateToProps = (state) => ({
	goals: state.goals,
	modalVisibility: state.modalVisibility
})

export const Success = connect(mapStateToProps, mapActionsToProps)(_Success);