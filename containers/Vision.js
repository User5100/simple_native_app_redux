import React, { Component } from 'react';
import { View, Text,
         StyleSheet, ListView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import { VisionModal, VisionList, 
	       Header, VisionItem } from '../presentation';
import { setVisionModalVisibility, getVision } from '../actions';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class _Vision extends Component {

	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getVision();
	}

	render () {
		return (
			<LinearGradient 
			  style={styles.container}
			  colors={['#FFDB4C', '#FFCD02']} >
			  
			  <Header style={styles.header} >
        	<Text style={styles.headerText} >My Vision</Text>
        </Header>

			  <ListView
          style={styles.list}
          dataSource={ds.cloneWithRows(this.props.vision)}
          renderRow={v => <VisionItem visionItem={v} />}
			  />

			  <Button
			    style={styles.btn}
			    onPress={() => this.props.setVisionModalVisibility(!this.props.visionModalVisibility)}
          children={'Set Your Vision'}
			  />

			  <VisionModal 
			    style={styles}
			    modalVisibility={this.props.visionModalVisibility}
			    setModalVisibility={this.props.setVisionModalVisibility}
			  />
			</LinearGradient>
		)
	}
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40
	},
	header: {
		backgroundColor: 'transparent',
		borderBottomWidth: 2,
		borderBottomColor: 'black',
		width: 300,
		top: 0,
		flex: 0.1,
		alignItems: 'center'
	},
	headerText: {
		fontSize: 20,
		color: 'black'
	},
	list: {
		marginTop: 50,
		flex: 1
	},
	btn: {

	}
});

const mapActionsToProps = (dispatch) => ({
	setVisionModalVisibility (isVisible) {
		dispatch(setVisionModalVisibility(isVisible));
	},
	getVision() {
		dispatch(getVision());
	}
});

const mapStateToProps = (state) => ({
  visionModalVisibility: state.visionModalVisibility,
  vision: state.vision
});

export const Vision = connect(mapStateToProps, mapActionsToProps)(_Vision);