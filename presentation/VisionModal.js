import React, { Component } from 'react';
import { Modal, View, 
	       Text, StyleSheet }from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { AddVision } from './index';

export class VisionModal extends Component {
	render () {
		return (
			<Modal
			  visible={this.props.modalVisibility}
			  style={styles.container} >
				<LinearGradient
          colors={['#1D62F0', '#1D62F0']}
          style={styles.container} >
          <AddVision />
          <Button
            children={'Go Back'}
            onPress={() => this.props.setModalVisibility(!this.props.modalVisibility)}
          />
				</LinearGradient>
			</Modal>
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
	text: {
		backgroundColor: 'transparent'
	}
})