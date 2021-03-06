import React, { Component } from 'react';
import {
  View, Text, Modal
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { LOADER } from '../constants/appConstants';

class Loader extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { loaderVisible } = this.props;
    return (
      <Modal
        animationType="none"
        transparent
        visible={loaderVisible}
      >
        <View style={{
          flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.9)'
        }}
        >
          <View style={{ margin: 10 }}>
            <Spinner color="orange" size={30} type="9CubeGrid" />
            <Spinner color="white" size={30} type="9CubeGrid" />
            <Spinner color="green" size={30} type="9CubeGrid" />
          </View>
          <Text style={{ color: 'white', fontSize: 20 }}>{LOADER.TITLE}</Text>
        </View>
      </Modal>
    );
  }
}

export default Loader;

// LOADERS: To change the loader,change type property of spinner to any one which is below
// 1.Wave
// 2.Circle
// 3.Bounce
// 4.CircleFlip
// 5.WanderingCubes
// 6.Pulse
// 7.ChasingDots
// 8.ThreeBouncer
// 9.9CubeGrid
