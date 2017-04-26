import React, { Component } from 'react';
import { View, Text, 
	       TouchableHighlight, StyleSheet } from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Success, Vision } from '../containers';

export class Home extends Component {
	render () {
		return (
				<TabView tabBarPosition='bottom'>
        	<Success 
          	tabLabel='Goal'
          	style={styles.container} />
        	<Vision
          	tabLabel='Vision' />
    		</TabView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});