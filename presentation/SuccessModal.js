import React from 'react';
import { Modal, View,
         StyleSheet, Text,
         TextInput } from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from './Header';
import { AddGoal } from './index';

export const SuccessModal = (props) => (
  <Modal 
		visible={props.modalVisibility} >
    <LinearGradient
      colors={['#FF9500', '#FF5E3A']}
      style={styles.container} >
        
      <AddGoal style={styles.addGoal} />

      <Button
        style={styles.btn}
        onPress={() => props.setModalVisibility(!props.modalVisibility)}
      ><Text style={styles.btnText}>Go Back</Text></Button>
    </LinearGradient>
	</Modal>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40
	},
  btn: {
    borderColor: 'white'
  },
  btnText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18
  },
  addGoal: {
    top: 0,
    flex: 2
  }
})