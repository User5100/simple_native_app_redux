import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { Landing, Home } from './presentation';

export default class native_app extends Component {

  constructor () {
    super();

    this.state = {
      showLanding: true
    }

    this.handleShowLanding = this.handleShowLanding.bind(this);
    this.renderRoot = this.renderRoot.bind(this);
  }
  handleShowLanding () {
    this.setState({ showLanding: false });
  }
  renderRoot (ComponentToRender) {
    return (
      <Provider store={store} >
        <ComponentToRender handleShowLanding={this.handleShowLanding} />
      </Provider>
    )
  }
  render () {   
    let renderComponent = this.state.showLanding ? this.renderRoot(Landing) : this.renderRoot(Home);
    return renderComponent;
  }
}

AppRegistry.registerComponent('native_app', () => native_app);
